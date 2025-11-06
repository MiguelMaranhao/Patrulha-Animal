import React, { useEffect } from 'react'
import HomeContent from '../pages/HomeContent'
import PetsContent from '../pages/PetsContent'
import AddPetContent from '../pages/AddPetContent'
import MercadoContent from '../pages/MercadoContent'
import CuidadoContent from '../pages/CuidadoContent'
import AccountContent from '../pages/AccountContent'
import NavBar from './NavBar'

export default function MainApp(props) {
  const { user, pets, currentPage, onNavigate, onLogout, onAddPet, preSelectedPetId, onClearPreSelection } = props

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [currentPage, pets]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeContent user={user} pets={pets} onNavigate={onNavigate} preSelectedPetId={preSelectedPetId} onClearPreSelection={onClearPreSelection} />
      case 'pets':
        return <PetsContent pets={pets} onNavigate={onNavigate} />
      case 'addPet':
        return <AddPetContent onAddPet={onAddPet} />
      case 'mercado':
        return <MercadoContent onNavigate={onNavigate} />
      case 'cuidado':
        return <CuidadoContent onNavigate={onNavigate} />
      case 'account':
        return <AccountContent user={user} onLogout={onLogout} />
      default:
        return <HomeContent user={user} pets={pets} onNavigate={onNavigate} preSelectedPetId={preSelectedPetId} onClearPreSelection={onClearPreSelection} />
    }
  }

  return (
    <>
      <main className="flex-grow overflow-y-auto bg-gray-50">{renderContent()}</main>
      <NavBar currentPage={currentPage} onNavigate={onNavigate} />
    </>
  )
}
