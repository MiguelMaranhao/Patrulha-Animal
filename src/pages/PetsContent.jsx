import React from 'react'
import PetList from '../components/PetList'

export default function PetsContent({ pets, onNavigate }) {
  return (
    <div className="p-6 flex flex-col h-full">
      <div className="flex-shrink-0">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Todos os Pets</h1>
          <button onClick={() => onNavigate('addPet')} className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition">+ Adicionar</button>
        </div>
      </div>
      <div className="mt-6 space-y-4 flex-grow h-0 overflow-y-auto">
        <PetList pets={pets} isCompact={false} />
      </div>
    </div>
  )
}
