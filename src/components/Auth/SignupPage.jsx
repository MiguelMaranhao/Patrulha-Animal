import React, { useState, useEffect } from 'react'

export default function SignupPage({ onSignup, onShowLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setError('')
    if (!name || !email || !password) {
      setError('Por favor, preencha nome, email e senha.')
      return
    }
    onSignup({ name, email })
  }

  return (
    <div className="flex-grow flex flex-col p-8 justify-center overflow-y-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cyan-700">Crie sua Conta</h1>
        <p className="text-gray-500 mt-2">É rápido e fácil.</p>
      </div>

      <form id="signup-form" className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome completo" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 transition" value={name} onChange={(ev) => setName(ev.target.value)} required />
        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 transition" value={email} onChange={(ev) => setEmail(ev.target.value)} required />
        <input type="text" placeholder="CPF (opcional)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 transition" value={cpf} onChange={(ev) => setCpf(ev.target.value)} />
        <input type="password" placeholder="Senha" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 transition" value={password} onChange={(ev) => setPassword(ev.target.value)} required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-cyan-600 text-white p-3 rounded-lg font-semibold hover:bg-cyan-700 transition shadow">Cadastrar e Entrar</button>
      </form>

      <div className="text-center mt-6">
        <a href="#" onClick={(ev) => { ev.preventDefault(); onShowLogin(); }} className="text-cyan-600 hover:underline">Já tem uma conta? Faça login</a>
      </div>
    </div>
  )
}
