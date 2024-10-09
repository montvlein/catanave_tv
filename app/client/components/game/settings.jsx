import React, { useState } from 'react';

const GameSetup = ({ onStartGame }) => {
  const [gameType, setGameType] = useState('basic');
  const [player1, setPlayer1] = useState('subzero');
  const [player2, setPlayer2] = useState('kano');
  const [arenaType, setArenaType] = useState('THRONE_ROOM');
  const [isHost, setIsHost] = useState(false);
  const [gameName, setGameName] = useState('');

  const handleStartGame = () => {
    const options = {
      arena: {
        arena: arenaType
      },
      fighters: [
        { name: player1 },
        { name: player2 }
      ],
      callbacks: {},
      isHost: isHost,
      gameName: gameName,
      gameType: gameType
    };

    onStartGame(options);
  };

  return (
    <div className='flex flex-col gap-4'>
      <h2>Game Setup</h2>
      <div>
        <label>
          Game Type:
          <select className='text-gray-900' value={gameType} onChange={(e) => setGameType(e.target.value)}>
            <option value="basic">Basic</option>
            <option value="network">Network</option>
            <option value="multiplayer">Multiplayer</option>
            <option value="webcaminput">Webcam Input</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Player 1:
          <select className='text-gray-900' value={player1} onChange={(e) => setPlayer1(e.target.value)}>
            <option value="subzero">Sub-Zero</option>
            <option value="kano">Kano</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Player 2:
          <select className='text-gray-900' value={player2} onChange={(e) => setPlayer2(e.target.value)}>
            <option value="subzero">Sub-Zero</option>
            <option value="kano">Kano</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Arena:
          <select className='text-gray-900' value={arenaType} onChange={(e) => setArenaType(e.target.value)}>
            <option value="TOWER">Tower</option>
            <option value="THRONE_ROOM">Throne Room</option>
          </select>
        </label>
      </div>
      {gameType === 'network' && (
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
      <button onClick={handleStartGame} className='bg-rose-800 p-4 rounded-xl'>Start Game</button>
    </div>
  );
};

export default GameSetup;