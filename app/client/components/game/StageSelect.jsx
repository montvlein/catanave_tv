import React from 'react';

const stages = [
  {
    id: "TOWER",
    name: 'TOWER',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=600&fit=crop',
    description: 'A high-tech arena surrounded by neon lights and holographic billboards',
  },
  {
    id: "THRONE_ROOM",
    name: 'Ancient Temple Ruins',
    image: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=1200&h=600&fit=crop',
    description: 'A mystical battlefield where ancient meets future',
  },
];

const StageSelect = ({
  selectedStage,
  onSelectStage,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stages.map((stage) => (
        <div
          key={stage.id}
          className={`
            relative rounded-lg overflow-hidden cursor-pointer
            transform transition-all duration-300
            ${selectedStage?.id === stage.id
              ? 'ring-4 ring-purple-500 scale-105'
              : 'hover:scale-105'
            }
          `}
          onClick={() => onSelectStage(stage)}
        >
          <img
            src={stage.image}
            alt={stage.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-xl font-bold mb-1">{stage.name}</h3>
            <p className="text-sm text-gray-300">{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StageSelect;