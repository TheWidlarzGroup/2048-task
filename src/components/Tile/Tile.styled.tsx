import styled from "styled-components";

export const TILE_WIDTH = 100;
export const TILE_HEIGHT = 100;

export const TileContainer = styled.div<{ top: number; left: number }>`
  width: ${TILE_WIDTH}px;
  height: ${TILE_HEIGHT}px;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  border-radius: 12px;
`;
