import React, { useEffect } from 'react'

function getButtonClass(page, currentPage) {
  const baseClass = "nav-btn flex flex-col items-center p-2 rounded-lg";
  if (page === currentPage) {
    return `${baseClass} text-cyan-600`;
  }
  return `${baseClass} text-gray-500`;
}

export default function NavBar({ currentPage, onNavigate }) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [currentPage]);

  return (
    <nav className="w-full bg-white border-t border-gray-200 grid grid-cols-5 gap-1 p-2 flex-shrink-0">
      <button onClick={() => onNavigate('home')} className={getButtonClass('home', currentPage)}>
        <i data-lucide="home" className="w-6 h-6"></i>
        <span className="text-xs font-medium">Home</span>
      </button>
      <button onClick={() => onNavigate('pets')} className={getButtonClass('pets', currentPage)}>
        <i data-lucide="paw-print" className="w-6 h-6"></i>
        <span className="text-xs font-medium">Pets</span>
      </button>
      <button onClick={() => onNavigate('mercado')} className={getButtonClass('mercado', currentPage)}>
        <i data-lucide="shopping-cart" className="w-6 h-6"></i>
        <span className="text-xs font-medium">Mercado</span>
      </button>
      <button onClick={() => onNavigate('cuidado')} className={getButtonClass('cuidado', currentPage)}>
        <i data-lucide="store" className="w-6 h-6"></i>
        <span className="text-xs font-medium">Cuidado</span>
      </button>
      <button onClick={() => onNavigate('account')} className={getButtonClass('account', currentPage)}>
        <i data-lucide="user-circle" className="w-6 h-6"></i>
        <span className="text-xs font-medium">Conta</span>
      </button>
    </nav>
  )
}
