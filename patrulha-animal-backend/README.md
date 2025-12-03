## 📚 Documentação da API

Esta API fornece recursos para o projeto **Patrulha Animal**, incluindo autenticação de usuários e gestão completa dos animais e rastreamento.

**Base URL:** `https://patrulha-animal-backend.onrender.com`

---

### 🔐 Autenticação e Segurança

Para acessar as rotas protegidas (Gestão de Pets), é necessário enviar o token JWT no cabeçalho da requisição.

**Header Obrigatório:**
- **Key:** `x-auth-token`
- **Value:** `<Seu_Token_JWT>` (Obtido no login)

---

### 1. Usuários

#### 📝 Registrar Novo Usuário
Cria uma nova conta no sistema.

- **Método:** `POST`
- **Endpoint:** `/api/auth/register`
- **Body (JSON):**
  
{
  "name": "Professora Sheila",
  "email": "professora.sheila@teste.com",
  "password": "123456",
  "cpf": "000.111.222-33"

}

🔑 Login (Autenticar)

Verifica credenciais e retorna o Token de Acesso.

Método: POST

Endpoint: /api/auth/login

Body (JSON):


{
  "email": "professora.sheila@teste.com",
  "password": "123456"
}

Nota: Copie o código do campo token na resposta para usar nas rotas abaixo.

### 2. Gestão de Pets

🐾 Cadastrar um Pet

Vincula um novo animal ao usuário logado.

Método: POST

Endpoint: /api/pets

Header: x-auth-token

Body (JSON):


{
  "name": "Rex",
  "breed": "Pastor Alemão",
  "age": 4,
  "weight": 22.5,
  "type": "Cachorro",
  "photoUrl": "[https://cdn-icons-png.flaticon.com/512/194/194630.png](https://cdn-icons-png.flaticon.com/512/194/194630.png)"
}
Dica: Salve o _id retornado para usar nas rotas de edição e GPS.

### 📋 Listar Pets

Retorna todos os animais cadastrados pelo usuário.

Método: GET

Endpoint: /api/pets

Header: x-auth-token

### 📍 Simular GPS (Atualizar Localização)

Envia coordenadas simulando o hardware da coleira.

Método: PUT

Endpoint: /api/pets/{id}/location

Header: x-auth-token

Body (JSON):

{
  "lat": -7.237136,
  "lng": -35.884383
}
(Coordenadas de exemplo: Unifacisa - Campina Grande)

### ✏️ Editar Dados do Pet

Atualiza informações cadastrais do animal.

Método: PUT

Endpoint: /api/pets/{id}

Header: x-auth-token

Body (JSON):

{
  "weight": 25.0,
  "age": 5
}

### 🗑️ Remover Pet

Exclui o animal do banco de dados.

Método: DELETE

Endpoint: /api/pets/{id}

Header: x-auth-token
