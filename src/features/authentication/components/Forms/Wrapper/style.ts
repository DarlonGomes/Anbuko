import styled from 'styled-components';

const Container = styled.div`
  min-width: 445px;
  min-height: 200px;
  background-color: var(--gray-900-80);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 30px;
  gap: 10px;
  position: fixed;
  top: 179px;
  left: 70px;
  z-index: 1;
`;

export { Container };
