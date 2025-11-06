import React, { useEffect, useState } from 'react'
import PetList from '../components/PetList'

function PetSelectorItem({ pet, isSelected, onClick }) {
  const iconName = pet.type === 'dog' ? 'dog' : 'cat'
  const iconColor = pet.type === 'dog' ? 'text-orange-500' : 'text-indigo-500'

  const baseClass = 'flex flex-col items-center p-3 rounded-lg border-2 w-20 flex-shrink-0 transition-all duration-200'
  const selectedClass = 'bg-cyan-50 border-cyan-500 shadow-md scale-105'
  const notSelectedClass = 'bg-white border-gray-200 hover:bg-gray-50'

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [isSelected])

  return (
    <button onClick={onClick} className={`${baseClass} ${isSelected ? selectedClass : notSelectedClass}`}>
      <i data-lucide={iconName} className={`w-6 h-6 ${iconColor}`}></i>
      <span className="text-sm font-medium mt-1 truncate w-full">{pet.name}</span>
    </button>
  )
}

export default function HomeContent({ user, pets, onNavigate, preSelectedPetId, onClearPreSelection }) {
  const welcomeName = user.name ? user.name.split(' ')[0] : 'Usuário'
  const [selectedPetId, setSelectedPetId] = useState(null)

  useEffect(() => {
    if (preSelectedPetId && pets.find(p => p.id === preSelectedPetId)) {
      setSelectedPetId(preSelectedPetId)
      onClearPreSelection()
    } else if (pets.length > 0 && (!selectedPetId || !pets.find(p => p.id === selectedPetId))) {
      setSelectedPetId(pets[0].id)
    } else if (pets.length === 0) {
      setSelectedPetId(null)
    }
  }, [pets, preSelectedPetId, onClearPreSelection, selectedPetId])

  const selectedPet = pets.find(p => p.id === selectedPetId)

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [selectedPetId, pets])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Olá, {welcomeName}</h1>
      </div>

      <div className="mt-6 bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-700">Meus Pets</h2>
          <button onClick={() => onNavigate('addPet')} className="bg-cyan-500 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition">+ Adicionar Pet</button>
        </div>
        <div className="space-y-3">
          <PetList pets={pets.slice(0,3)} isCompact={true} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Localização do Pet</h2>

        {pets.length > 0 ? (
          <div className="flex overflow-x-auto space-x-3 pb-2 pt-1 pl-1">
            {pets.map(pet => (
              <PetSelectorItem key={pet.id} pet={pet} isSelected={pet.id === selectedPetId} onClick={() => setSelectedPetId(pet.id)} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm mb-2 text-center p-4 bg-white rounded-lg shadow">Adicione um pet para começar a rastrear.</p>
        )}

        <div className="w-full h-48 rounded-xl flex items-center justify-center text-gray-500 relative shadow-lg">
          <img src="https://i.ibb.co/TBDh4wt6/Chat-GPT-Image-3-de-nov-de-2025-21-05-03.png" alt="Mapa de localização do pet" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
            <h3 className="text-white font-bold text-lg">{selectedPet ? `Localizando ${selectedPet.name}...` : 'Nenhum pet selecionado'}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
