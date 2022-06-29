import { Tile } from "../Tile/Tile";
import { BoardContainer } from "./Board.styled";
import type { Tile as TileType } from "./useGameBoard";

interface Props {
  tiles: TileType[];
}

export const Board = ({ tiles }: Props) => {
  const tilesList = tiles.map((tile) => (
    <Tile
      key={`${tile.id}-singleTile`}
      value={tile.value}
      position={tile.position}
    />
  ));

  return (
    <BoardContainer>
      {tilesList}

      {/* <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} />
      <Tile value={2} position={[200, 400]} /> */}
    </BoardContainer>
  );
};
