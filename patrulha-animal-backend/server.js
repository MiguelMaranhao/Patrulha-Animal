require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();

connectDB();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'x-auth-token'] 
}));

app.use(express.json());

app.use('/api/auth', require('./src/routes/authRoutes')); 
app.use('/api/pets', require('./src/routes/petRoutes'));

app.get('/', (req, res) => {
    res.send('🚀 API Patrulha Animal Rodando com CORS Liberado!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});