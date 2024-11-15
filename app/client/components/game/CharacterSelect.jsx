import React from 'react';

const characters = [
  {
    id: "subzero",
    name: 'Sub-0',
    image: 'https://i.etsystatic.com/14566793/r/il/cdb7e8/4136866047/il_fullxfull.4136866047_k9ui.jpg',
    description: 'A cyber-enhanced warrior with lightning-fast reflexes',
    power: 90,
    speed: 85,
    technique: 75,
  },
  {
    id: "kano",
    name: 'Kanno',
    image: 'https://fangirlisms.com/wp-content/uploads/2021/12/yoko-kanno.jpg',
    description: 'Master of the ancient sword arts fused with modern technology'
  },
  {
    id: 3,
    name: 'Gordo Mortero',
    image: '/images/fighters/gordomortero/gordo-mortero.jpeg',
    description: 'A mysterious fighter with the ability to phase through attacks'
  },
  {
    id: 4,
    name: 'Atlas',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=800&fit=crop',
    description: 'A towering powerhouse with devastating strength'
  },
];


const CharacterSelect = ({
  selectedCharacter,
  onSelectCharacter,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className={`
            relative rounded-lg overflow-hidden cursor-pointer
            transform transition-all duration-300
            ${selectedCharacter?.id === character.id
              ? 'ring-4 ring-red-500 scale-105'
              : 'hover:scale-105'
            }
          `}
          onClick={() => onSelectCharacter(character)}
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-xl font-bold mb-1">{character.name}</h3>
            <div className="space-y-1">{character.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterSelect;