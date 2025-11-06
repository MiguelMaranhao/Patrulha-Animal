import React, { useEffect } from 'react'

function PetshopItem({ shop }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-center space-x-4">
      <div className="p-3 bg-cyan-100 rounded-full">
        <i data-lucide={shop.icon} className="w-6 h-6 text-cyan-600"></i>
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800">{shop.name}</h3>
        <p className="text-sm text-gray-500">{shop.address}</p>
      </div>
      <a href="#" onClick={(ev)=>ev.preventDefault()} className="text-sm text-cyan-600 font-medium">Ver</a>
    </div>
  )
}

export default function CuidadoContent() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [])

  const petshops = [
    { name: 'Centro de Zoonose de Campina Grande', address: 'R. Isolda Barros Torquarto, s/n - Bodocongó, Campina Grande - PB, 58430-090', icon: 'heart-pulse' },
    { name: 'Petz', address: 'Rua Exemplo, 123', icon: 'store' },
    { name: 'Cobasi', address: 'Avenida Teste, 456', icon: 'store' },
    { name: 'Clínica Vet. Dr. AuAu', address: 'Travessa Cuidado, 789', icon: 'heart-pulse' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Petshops Parceiros</h1>
      <div className="space-y-4">
        {petshops.map(s => <PetshopItem key={s.name} shop={s} />)}
      </div>
    </div>
  )
}
