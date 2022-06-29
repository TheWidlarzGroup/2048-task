import { useCallback, useEffect, useState } from "react";
import { generateID } from "../../utils/generateId";

export interface Tile {
  id: string;
  value: number;
  position: number[];
}

const emptyTiles = [
  { top: 0, left: 0, value: 2 },
  { top: 0, left: 1, value: 2 },
  { top: 0, left: 2, value: 2 },
  { top: 0, left: 3, value: 2 },
  { top: 1, left: 0, value: 2 },
  { top: 1, left: 1, value: 2 },
  { top: 1, left: 2, value: 2 },
  { top: 1, left: 3, value: 2 },
  { top: 2, left: 0, value: 2 },
  { top: 2, left: 1, value: 2 },
  { top: 2, left: 2, value: 2 },
  { top: 2, left: 3, value: 2 },
  { top: 3, left: 0, value: 2 },
  { top: 3, left: 1, value: 2 },
  { top: 3, left: 2, value: 2 },
  { top: 3, left: 3, value: 2 },
];

export const useGameBoard = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);

  const generateInitialTiles = () => {
    const getRandomTile = () => {
      const randomPositionIndex = Math.floor(Math.random() * emptyTiles.length);
      const singleTile = emptyTiles[randomPositionIndex];

      return {
        id: generateID(),
        position: [singleTile.top, singleTile.left],
        value: singleTile.value,
      };
    };

    setTiles([getRandomTile(), getRandomTile()]);
  };

  const generateNewTile = useCallback(() => {
    const randomPositionIndex = Math.floor(Math.random() * emptyTiles.length);

    const emptyTilesCopy = emptyTiles.slice();
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];
      const indexOfTile = tiles.findIndex(
        (a) => JSON.stringify(a.position) === JSON.stringify(tile.position)
      );
      emptyTilesCopy.slice(0, indexOfTile);
    }

    const randomTile = emptyTilesCopy[randomPositionIndex];

    const newFreshTile = {
      id: generateID(),
      position: [randomTile.top, randomTile.left],
      value: randomTile.value,
    };

    setTiles((prev) => {
      return [...prev, newFreshTile];
    });
  }, [tiles]);

  useEffect(() => {
    const handleKeyboardPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "w":
          const tilesAfterGoingUp: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [(a.position[0] = 0), a.position[1]] },
          ]);

          setTiles(tilesAfterGoingUp);
          generateNewTile();
          break;
        case "s":
          const tilesAfterGoingDown: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [(a.position[0] = 3), a.position[1]] },
          ]);

          setTiles(tilesAfterGoingDown);
          generateNewTile();
          break;
        case "a":
          const tilesAfterGoingLeft: Tile[] = tiles.flatMap((a) => [
            { ...a, position: [a.position[0], (a.position[1] = 0)] },
          ]);

          setTiles(tilesAfterGoingLeft);
          generateNewTile();
          break;
        case "d":
          const firstRowTiles = tiles.filter((a) => a.position[1] === 0);
          let newTiles: Tile[] = [];
          //   const tilesAfterGoingRight: Tile[] = tiles.flatMap((tile) => {
          let newTile: Tile | undefined;

          firstRowTiles.forEach((fTile) => {
            tiles.forEach((oldTile) => {
              if (fTile.value === oldTile.value) {
                newTile = {
                  ...oldTile,
                  position: oldTile.position,
                  value: fTile.value + oldTile.value,
                };
              } else {
                newTile = {
                  ...oldTile,
                  position: [oldTile.position[0], (oldTile.position[1] = 3)],
                };
              }
            });

            if (newTile) {
              newTiles = [...tiles, newTile];
            }
          });
          // return newTile ? [newTile] : [defaultTile];
          // return [
          //   { ...tile, position: [tile.position[0], (tile.position[1] = 3)] },
          // ];
          //   });

          setTiles(newTiles);
          generateNewTile();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyboardPress);

    if (tiles.some((a) => a.value === 2048)) {
      alert("Congratulations, You Won");
    }
    if (tiles.length === 16) {
      alert("You lost, try again");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyboardPress);
    };
  }, [generateNewTile, tiles]);
  return { tiles, generateInitialTiles };
};
