import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import GameSetup from "@/client/components/game/settings";

const MortalKombatGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1Life, setPlayer1Life] = useState(100);
  const [player2Life, setPlayer2Life] = useState(100);
  const [player1Name, setPlayer1Name] = useState('Sub-Zero');
  const [player2Name, setPlayer2Name] = useState('Kano');
  const [loading, setLoading] = useState(true)
  const arenaRef = useRef(null);
  const mkRef = useRef(null);

  useEffect(() => {
    const loadMk = async () => {
      const mkModule = await import('/public/mkEngine');
      mkRef.current = mkModule.default;
    };
    loadMk();

    const handleKeyDown = (e) => {
      if (e.keyCode === 32) {
        window.location.reload();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const setLife = (player, life) => {
    if (player === 'player1') {
      setPlayer1Life(life);
    } else {
      setPlayer2Life(life);
    }
  };

  const startGame = (options) => {
    setGameStarted(true);
    setPlayer1Name(options.fighters[0].name);
    setPlayer2Name(options.fighters[1].name);

    setTimeout(() => {
      if (mkRef.current && arenaRef.current) {
        const mk = mkRef.current;
        const updatedOptions = {
          ...options,
          arena: {
            ...options.arena,
            container: arenaRef.current
          },
          callbacks: {
            ...options.callbacks,
            attack: (f, o, l) => {
              if (o.getName() === options.fighters[1].name) {
                setLife('player2', o.getLife());
              } else {
                setLife('player1', o.getLife());
              }
            }
          }
        };
        mk.start(updatedOptions).ready(() => {
          setLoading(false);
        });
      } else {
        console.error('MK engine or arena container not available');
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div id="parent">
      {!gameStarted ? (
        <GameSetup onStartGame={startGame} />
      ) : (
        <>
          <div id="utils">
            <div id="player1Name" className="playerName">{player1Name}</div>
            <div id="player1LifeBar" className="lifebar">
              <div className="life" style={{ width: `${player1Life}%` }}></div>
            </div>
            <div id="player2Name" className="playerName">{player2Name}</div>
            <div id="player2LifeBar" className="lifebar">
              <div className="life" style={{ width: `${player2Life}%` }}></div>
            </div>
          </div>
          <div id="arena" ref={arenaRef}></div>
          {loading ?
          <div id="loading">
            <span className="loadingLabel">Loading...</span>
          </div>: null
          }
        </>
      )}
    </div>
  );
};

export default MortalKombatGame;