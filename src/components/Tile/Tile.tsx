import { TileContainer, TILE_HEIGHT } from "./Tile.styled";

interface Props {
  value: number;
  position: number[];
}

export const Tile = ({ value, position }: Props) => {
  return (
    <TileContainer
      top={position[0] * TILE_HEIGHT}
      left={position[1] * TILE_HEIGHT}
    >
      {value}
    </TileContainer>
  );
};
