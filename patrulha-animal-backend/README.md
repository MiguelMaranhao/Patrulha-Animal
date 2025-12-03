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
```json
{
  "name": "Professora Sheila",
  "email": "professora.sheila@teste.com",
  "password": "123456",
  "cpf": "000.111.222-33"
}
