import React, { useEffect, useState } from 'react';
import { Swords, MapPin, Play, Gamepad2 } from 'lucide-react';
import GameModeSelect from './GameModeSelect';
import CharacterSelect from './CharacterSelect';
import StageSelect from './StageSelect';

const GameSetup = ({ onStartGame }) => {

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState({id:"kano"});

  const [isHost, setIsHost] = useState(false);
  const [gameName, setGameName] = useState('');

  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(()=>{
    if (player1 && player2) setSelectedCharacter(true)
  }, [player1, player2])

  const isReadyToStart = selectedCharacter && selectedStage && selectedMode;

  const handleStartGame = () => {
    const options = {
      arena: {
        arena: selectedStage.id
      },
      fighters: [
        { name: player1.id },
        { name: player2.id }
      ],
      callbacks: {},
      isHost: isHost,
      gameName: gameName,
      gameType: selectedMode.id
    };

    onStartGame(options);
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 uppercase">
            popular fighters fighting - ppp
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Swords className="w-8 h-8 text-red-500" />
            <h2 className="text-xl text-gray-300">Setup</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          {/* Game Mode Selection */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Gamepad2 className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Choose Game Mode</h2>
            </div>
            <GameModeSelect
              selectedMode={selectedMode}
              onSelectMode={setSelectedMode}
            />
            {selectedMode?.id === 'network' && (
              <>
                <div>
                  <label>
                    Are you host?
                    <input
                      type="checkbox"
                      checked={isHost}
                      onChange={(e) => setIsHost(e.target.checked)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Game Name:
                    <input
                      type="text"
                      value={gameName}
                      className='text-gray-900 px-2'
                      onChange={(e) => setGameName(e.target.value)}
                    />
                  </label>
                </div>
              </>
            )}
          </div>

          {/* Character Selection */}
          <div className={selectedMode ? 'opacity-100' : 'opacity-50 pointer-events-none'}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Swords className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Choose Your Fighter</h2>
            </div>
            <CharacterSelect
              selectedCharacter={player1}
              onSelectCharacter={setPlayer1}
            />
          </div>
          { selectedMode?.id === "local" && (
            <div className={'opacity-100'}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <Swords className="w-6 h-6 text-purple-500" />
                <h2 className="text-2xl font-bold">Player 2 - Choose Your Fighter</h2>
              </div>
              <CharacterSelect
                selectedCharacter={player2}
                onSelectCharacter={setPlayer2}
              />
            </div>
          )}

          {/* Stage Selection */}
          <div className={selectedCharacter ? 'opacity-100' : 'opacity-50 pointer-events-none'}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <MapPin className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Choose Your Battlefield</h2>
            </div>
            <StageSelect
              selectedStage={selectedStage}
              onSelectStage={setSelectedStage}
            />
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              className={`
                px-12 py-4 rounded-lg text-xl font-bold
                transition-all duration-300 transform hover:scale-105
                ${isReadyToStart
                  ? 'bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600'
                  : 'bg-gray-700 cursor-not-allowed'
                }
              `}
              disabled={!isReadyToStart}
              onClick={handleStartGame}
            >
              <div className="flex items-center gap-2">
                <Play className="w-6 h-6" />
                START BATTLE
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GameSetup;