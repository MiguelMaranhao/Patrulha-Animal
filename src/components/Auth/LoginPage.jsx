import React, { useState, useEffect } from 'react'

export default function LoginPage({ onLogin, onShowSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (email && password) {
      onLogin({ email })
    } else {
      alert('Por favor, preencha email e senha.')
    }
  }

  return (
    <div className="flex-grow flex flex-col p-8 pt-16 justify-start overflow-y-auto">
      <img src="https://i.ibb.co/DDr5XWQB/Chat-GPT-Image-3-de-nov-de-2025-21-35-56.png" alt="Patrulha Animal Logo" className="w-32 h-32 mx-auto mb-4 flex-shrink-0" />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cyan-700">Bem-vindo!</h1>
        <p className="text-gray-500 mt-2">Faça login para cuidar do seu pet.</p>
      </div>

      <form id="login-form" className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 transition"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 transition"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          required
        />
        <button type="submit" className="w-full bg-cyan-600 text-white p-3 rounded-lg font-semibold hover:bg-cyan-700 transition shadow">Entrar</button>
      </form>

      <div className="text-center my-6">
        <a href="#" onClick={(ev) => { ev.preventDefault(); onShowSignup(); }} className="text-cyan-600 hover:underline">Não tem uma conta? Cadastre-se</a>
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-400">ou</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <button onClick={() => alert('Login com Google não implementado nesta versão.')} className="w-full bg-white border border-gray-300 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center shadow">
        <img src="https://www.google.com/favicon.ico" alt="Google icon" className="w-5 h-5 mr-3" />
        Entrar com o Google
      </button>
    </div>
  )
}
