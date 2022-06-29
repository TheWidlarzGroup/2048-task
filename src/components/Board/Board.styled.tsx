import styled from "styled-components";

export const BoardContainer = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: 25px auto 0 auto;
  background: #9e967e;
`;
