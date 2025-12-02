const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find({ owner: req.user.id });
        res.json(pets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

exports.addPet = async (req, res) => {
    const { name, breed, age, weight, type, photoUrl } = req.body; 

    try {
        const newPet = new Pet({
            name,
            breed,
            age,
            weight, 
            type,      
            photoUrl,  
            owner: req.user.id
        });

        const pet = await newPet.save();
        res.json(pet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

exports.updateLocation = async (req, res) => {
    const { petId } = req.params;
    const { lat, lng } = req.body;

    try {
        const pet = await Pet.findById(petId);

        if (!pet) {
            return res.status(404).json({ msg: 'Pet não encontrado' });
        }

        if (pet.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Não autorizado' });
        }

        pet.lastPosition = { lat, lng };
        pet.locationHistory.push({ lat, lng });

        await pet.save();

        res.json(pet.lastPosition);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

exports.deletePet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) return res.status(404).json({ msg: 'Pet não encontrado' });

        if (pet.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Não autorizado' });
        }

        await Pet.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Pet removido' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};

exports.updatePet = async (req, res) => {
    const { name, breed, age, weight, type, photoUrl } = req.body;
    
    const petFields = {};
    if (name) petFields.name = name;
    if (breed) petFields.breed = breed;
    if (age) petFields.age = age;
    if (weight) petFields.weight = weight;
    if (type) petFields.type = type;
    if (photoUrl) petFields.photoUrl = photoUrl;

    try {
        let pet = await Pet.findById(req.params.id);
        if (!pet) return res.status(404).json({ msg: 'Pet não encontrado' });

        if (pet.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Não autorizado' });
        }

        pet = await Pet.findByIdAndUpdate(req.params.id, { $set: petFields }, { new: true });
        res.json(pet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
};