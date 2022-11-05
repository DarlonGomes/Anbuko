import styled from 'styled-components';

const Container = styled.div`
  height: calc(100% - 25px);
  display: flex;
  align-items: center;
  margin-left: 70px;
  position: fixed;
  top: 0;
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
`;

export { Container, Content };
