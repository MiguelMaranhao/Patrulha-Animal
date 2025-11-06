import React, { useState, useEffect } from 'react'

export default function PetItem({ pet, isCompact }) {
  const [isExpanded, setIsExpanded] = useState(!isCompact);

  const iconName = pet.type === 'dog' ? 'dog' : 'cat';
  const iconColor = pet.type === 'dog' ? 'text-orange-500' : 'text-indigo-500';

  let details;
  if (isExpanded) {
    details = (
      <>
        <p className="text-sm text-gray-600">Raça: {pet.breed}</p>
        <p className="text-sm text-gray-600">Idade: {pet.age} anos</p>
        <p className="text-sm text-gray-600">Peso: {pet.weight} kg</p>
      </>
    );
  } else {
    details = <p className="text-sm text-gray-500">{pet.breed}</p>;
  }

  const handleClick = () => {
    if (!isCompact) setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [isExpanded]);

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
      onClick={handleClick}
      style={{ cursor: isCompact ? 'default' : 'pointer' }}
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-gray-100 rounded-full">
          <i data-lucide={iconName} className={`w-8 h-8 ${iconColor}`}></i>
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-lg text-gray-800">{pet.name}</h3>
          {details}
        </div>
      </div>
    </div>
  )
}
