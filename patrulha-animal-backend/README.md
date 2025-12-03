## Roteiro de Testes de API (Backend)
Projeto: Patrulha Animal  
(Base URL): https://patrulha-animal-backend.onrender.com

 Instrução Importante (Autenticação)
Para todas as rotas da seção "2. Gestão de Pets", é obrigatório adicionar o Token no cabeçalho (Header) do Postman:
Key: x-auth-token
Value: (Cole o token gerado no passo de Login)







## Autenticação (Usuários)
Caso 1: Registrar Novo Usuário
Cria uma conta no banco de dados e retorna o token de acesso.
Método: POST
URL: https://patrulha-animal-backend.onrender.com/api/auth/register
Body (JSON):
{
  "name": "Professora Sheila",
  "email": "professora.sheila@teste.com",
  "password": "123456",
  "cpf": "000.111.222-33"
}
Caso 2: Login (Autenticar)
Verifica as credenciais e gera o Token JWT necessário para os próximos passos.
Método: POST
URL: https://patrulha-animal-backend.onrender.com/api/auth/login
Body (JSON):
{
  "email": "professora.sheila@teste.com",
  "password": "123456"
}
Nota: Copie o código que aparece no campo "token" na resposta deste teste.





## Gestão de Pets (Requer Token)
Caso 3: Cadastrar um Pet
Salva um novo animal vinculado ao usuário logado.
Método: POST
URL: https://patrulha-animal-backend.onrender.com/api/pets
Header: x-auth-token: SEU_TOKEN_AQUI
Body (JSON):
{
  "name": "Rex",
  "breed": "Pastor Alemão",
  "age": 4,
  "weight": 22.5,
  "type": "Cachorro",
  "photoUrl": "https://cdn-icons-png.flaticon.com/512/194/194630.png"
}
Nota: Copie o _id do pet que aparecerá na resposta para usar nos próximos testes.
Caso 4: Listar Pets
Retorna todos os animais cadastrados pelo usuário.
Método: GET
URL: https://patrulha-animal-backend.onrender.com/api/pets
Header: x-auth-token: SEU_TOKEN_AQUI
Body: (Vazio)





## Caso 5: Simular GPS (Atualizar Localização)
Envia coordenadas de latitude/longitude simulando o hardware da coleira.
Método: PUT
URL: https://patrulha-animal-backend.onrender.com/api/pets/COLAR_ID_DO_PET_AQUI/location
Header: x-auth-token: SEU_TOKEN_AQUI
Body (JSON):
{
  "lat": -7.237136,
  "lng": -35.884383
}
(Coordenadas da Unifacisa - Campina Grande)
Caso 6: Editar Dados do Pet
Atualiza informações cadastrais (ex: peso ou idade).
Método: PUT
URL: https://patrulha-animal-backend.onrender.com/api/pets/COLAR_ID_DO_PET_AQUI
Header: x-auth-token: SEU_TOKEN_AQUI
Body (JSON):
{
  "weight": 25.0,
  "age": 5
}





Caso 7: Remover Pet
Exclui o animal do banco de dados.
Método: DELETE
URL: https://patrulha-animal-backend.onrender.com/api/pets/COLAR_ID_DO_PET_AQUI
Header: x-auth-token: SEU_TOKEN_AQUI
Body: (Vazio)
