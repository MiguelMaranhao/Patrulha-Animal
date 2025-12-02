const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String },
    age: { type: Number },
    weight: { type: Number },
    
    type: { 
        type: String, 
        enum: ['Cachorro', 'Gato', 'Ave', 'Roedor', 'Outro'], 
        default: 'Cachorro', 
        required: true 
    },
    photoUrl: { type: String }, 

    lastPosition: {
        lat: { type: Number, default: -7.237136 }, 
        lng: { type: Number, default: -35.884383 }
    },
    locationHistory: [{
        lat: Number,
        lng: Number,
        timestamp: { type: Date, default: Date.now }
    }],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Pet', PetSchema);