import React from 'react';
import { Swords, Users, Globe } from 'lucide-react';

const gameModes = [
  {
    id: 'basic',
    name: 'Training',
    description: 'Practice your moves and master your combos',
    icon: 'swords',
  },
  {
    id: 'local',
    name: 'Multiplayer Local',
    description: 'Battle against a friend on the same device',
    icon: 'users',
  },
  {
    id: 'network',
    name: 'Multiplayer Network',
    description: 'Fight against players worldwide',
    icon: 'globe',
  },
];

const GameModeSelect = ({
  selectedMode,
  onSelectMode,
}) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'swords':
        return <Swords className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'globe':
        return <Globe className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {gameModes.map((mode) => (
        <div
          key={mode.id}
          className={`
            relative p-6 rounded-lg cursor-pointer
            backdrop-blur-lg backdrop-filter
            border-2 border-opacity-20
            transform transition-all duration-300
            ${selectedMode?.id === mode.id
              ? 'border-red-500 bg-red-500 bg-opacity-10'
              : 'border-white hover:border-purple-500 bg-white bg-opacity-5 hover:bg-opacity-10'
            }
          `}
          onClick={() => onSelectMode(mode)}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className={`
              p-4 rounded-full
              ${selectedMode?.id === mode.id
                ? 'bg-red-500 text-white'
                : 'bg-purple-500 bg-opacity-20 text-purple-300'
              }
            `}>
              {getIcon(mode.icon)}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{mode.name}</h3>
              <p className="text-sm text-gray-300">{mode.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameModeSelect;