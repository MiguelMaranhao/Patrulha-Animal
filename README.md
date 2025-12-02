# 🐾 Patrulha Animal

> **Plataforma Integrada de Gestão, Saúde e Rastreamento Pet.**

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

O **Patrulha Animal** é um "Super App" (PWA) projetado para resolver as principais dores dos tutores de animais: segurança (rastreamento GPS simulado), saúde (carteira de vacinação digital) e conveniência (marketplace e serviços).

Este é um **Monorepo** contendo a API e a Interface do usuário.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend (Pasta `patrulha-animal-frontend`)**
- **React.js + Vite**: Interface reativa e rápida.
- **Tailwind CSS**: Estilização moderna e responsiva (Mobile-First).
- **Google Maps API**: Visualização de localização em tempo real.
- **PWA**: Experiência nativa mobile.

### **Backend (Pasta `patrulha-animal-backend`)**
- **Node.js + Express**: API RESTful.
- **MongoDB Atlas**: Banco de dados na nuvem.
- **JWT**: Autenticação segura.

---

## 🚀 Como Rodar o Projeto (Passo a Passo)

Para executar o sistema completo, você precisará de **dois terminais** abertos simultaneamente.

### Pré-requisitos
* Node.js instalado.
* Git instalado.

---

### 1️⃣ Configurando o Backend (Servidor)

## Abra o terminal e entre na pasta do servidor:

cd patrulha-animal-backend
   
## Instale as dependências:

npm install

Configuração de Segurança (.env): Crie um arquivo .env dentro da pasta patrulha-animal-backend:

OBS: CÓDIGO .env ENVIADO NO COMENTÁRIO DA ENTREGA!!

## Inicie o servidor:

npm run dev

O servidor rodará em: http://localhost:3000

# 2️⃣ Configurando o Frontend (Interface)

## Abra um novo terminal e entre na pasta da interface:

cd patrulha-animal-frontend

## Instale as dependências:

npm install

## Configuração do Mapa (.env.local): Crie um arquivo .env.local dentro da pasta patrulha-animal-frontend:

OBS: Código .env.local ENVIADO NO COMENTÁRIO DA ENTREGA!!

## Conexão Local: Certifique-se de que o arquivo src/App.jsx (ou config) está apontando para o servidor local:


// const API_URL = '[https://patrulha-animal-backend.onrender.com](https://patrulha-animal-backend.onrender.com)'; // Nuvem
const API_URL = '[http://127.0.0.1:3000](http://127.0.0.1:3000)'; // Local

## Inicie o aplicativo:

npm run dev

Acesse no navegador: http://localhost:5173

📱 Funcionalidades Principais
Rastreamento GPS: Mapa interativo focado na região local (Campina Grande - PB).

Gestão de Pets: CRUD completo (Adicionar, Editar, Remover e Listar Pets).

Patrulha Shop: Marketplace com carrinho de compras, categorias e simulação de checkout.

Saúde: Carteira de vacinação e agendamento de serviços com parceiros.

Conta: Perfil de usuário, configurações e chatbot de suporte simulado.

⚠️ Nota sobre Segurança
Por boas práticas de desenvolvimento (DevSecOps), arquivos de credenciais (.env) não são versionados neste repositório público. Isso protege o banco de dados e as chaves de API contra uso indevido.
