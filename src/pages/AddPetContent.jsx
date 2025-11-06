import React, { useEffect, useState } from 'react'

export default function AddPetContent({ onAddPet }) {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setError('')
    if (!name || !weight || !breed || !age || !type) {
      setError('Por favor, preencha todos os campos, incluindo o tipo de pet.')
      return
    }
    onAddPet({
      name,
      weight: parseFloat(weight),
      breed,
      age: parseInt(age),
      type
    })
    setName(''); setWeight(''); setBreed(''); setAge(''); setType('')
  }

  const getButtonClass = (buttonType) => {
    const base = 'flex-1 p-3 flex flex-col items-center justify-center border-2 rounded-lg transition-all duration-200';
    if (type === buttonType) {
      return `${base} bg-cyan-50 border-cyan-500 text-cyan-700 shadow-md scale-105`;
    }
    return `${base} bg-gray-50 border-gray-300 text-gray-500 hover:bg-gray-100`;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Adicionar Novo Pet</h1>
      <form id="add-pet-form" className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome do Pet" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" value={name} onChange={ev => setName(ev.target.value)} required />
        <input type="number" placeholder="Peso (kg)" step="0.1" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" value={weight} onChange={ev => setWeight(ev.target.value)} required />
        <input type="text" placeholder="Raça" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" value={breed} onChange={ev => setBreed(ev.target.value)} required />
        <input type="number" placeholder="Idade (anos)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" value={age} onChange={ev => setAge(ev.target.value)} required />
        <div className="flex space-x-4 pt-2">
          <button type="button" onClick={() => setType('dog')} className={getButtonClass('dog')}>
            <i data-lucide="dog" className="w-8 h-8 mb-2 text-orange-500"></i>
            <span className="font-medium">Cachorro</span>
          </button>
          <button type="button" onClick={() => setType('cat')} className={getButtonClass('cat')}>
            <i data-lucide="cat" className="w-8 h-8 mb-2 text-indigo-500"></i>
            <span className="font-medium">Gato</span>
          </button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-cyan-600 text-white p-3 rounded-lg font-semibold hover:bg-cyan-700 transition">Adicionar Pet</button>
      </form>
    </div>
  )
}
