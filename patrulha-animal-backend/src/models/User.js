const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String }, 
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['USER', 'ADMIN', 'PETSHOP'], 
        default: 'USER' 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);