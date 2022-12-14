import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
`;
const Content = styled.div`
  background-color: var(--gray-900-80);
  width: 380px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 30px;
  gap: 10px;
  border: 1px solid var(--border-black);
`;

export { Container, Content };
