import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleKeyboardPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "w":
          const tilesAfterGoingUp: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [(a.position[0] = 0), a.position[1]] },
          ]);

          setTiles(tilesAfterGoingUp);

          break;
        case "s":
          const tilesAfterGoingDown: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [(a.position[0] = 3), a.position[1]] },
          ]);

          setTiles(tilesAfterGoingDown);
          break;
        case "a":
          const tilesAfterGoingLeft: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [a.position[0], (a.position[1] = 0)] },
          ]);

          setTiles(tilesAfterGoingLeft);
          break;
        case "d":
          const tilesAfterGoingRight: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [a.position[0], (a.position[1] = 3)] },
          ]);

          setTiles(tilesAfterGoingRight);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyboardPress);

    return () => {
      window.removeEventListener("keydown", handleKeyboardPress);
    };
  }, [tiles]);
  return { tiles, generateInitialTiles };
};
