import React, { useEffect, useState } from 'react'
import LoaderPage from './components/LoaderPage'
import AuthPage from './components/Auth/AuthPage'
import MainApp from './components/MainApp'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [preSelectedPetId, setPreSelectedPetId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const savedUser = localStorage.getItem('petcareUser');
        if (savedUser) {
          const parsed = JSON.parse(savedUser);
          setCurrentUser(parsed);
          setIsAuthenticated(true);

          const savedPets = localStorage.getItem(`petcarePets_${parsed.email}`);
          if (savedPets) {
            setPets(JSON.parse(savedPets));
          }
        }
      } catch (error) {
        console.error('Erro ao carregar dados do Local Storage:', error);
        localStorage.clear();
      }
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!isLoading && currentUser) {
      localStorage.setItem(`petcarePets_${currentUser.email}`, JSON.stringify(pets));
    }
  }, [pets, currentUser, isLoading]);

  const handleLogin = (formData) => {
    const user = {
      name: formData.name || (formData.email ? formData.email.split('@')[0] : 'Usuário'),
      email: formData.email,
    };
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('petcareUser', JSON.stringify(user));

    const savedPets = localStorage.getItem(`petcarePets_${user.email}`);
    setPets(savedPets ? JSON.parse(savedPets) : []);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setPets([]);
    localStorage.removeItem('petcareUser');
  };

  const handleAddPet = (petData) => {
    const newPet = { ...petData, id: Date.now() };
    setPets(prev => [...prev, newPet]);
    setCurrentPage('home');
    setPreSelectedPetId(newPet.id);
  };

  const handleNavigate = (page, petId = null) => {
    setCurrentPage(page);
    setPreSelectedPetId(petId);
  };

  return (
    <div id="app-container" className="max-w-md mx-auto md:mt-8 bg-white md:rounded-2xl shadow-lg overflow-hidden h-screen md:h-[80vh] flex flex-col">
      {isLoading ? (
        <LoaderPage />
      ) : !isAuthenticated ? (
        <AuthPage onLogin={handleLogin} />
      ) : (
        <MainApp
          user={currentUser}
          pets={pets}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onAddPet={handleAddPet}
          preSelectedPetId={preSelectedPetId}
          onClearPreSelection={() => setPreSelectedPetId(null)}
        />
      )}
    </div>
  )
}
