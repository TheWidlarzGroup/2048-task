import { useState } from "react";

export interface Tile {
  id: number;
  value: number;
  position: [number, number];
}

export const useGameBoard = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);

  const generateInitialTiles = () => {
    const getRandomPositions = () => {
      const randomPositionInRange = Math.floor(Math.random() * 4);
      const position: [number, number] = [
        randomPositionInRange,
        randomPositionInRange,
      ];

      return position;
    };

    const firstRandomTile = {
      id: 1,
      value: 2,
      position: getRandomPositions(),
    };

    const secondRandomTile = {
      id: 2,
      value: 2,
      position: getRandomPositions(),
    };

    setTiles([firstRandomTile, secondRandomTile]);
  };

  return { tiles, generateInitialTiles };
};
