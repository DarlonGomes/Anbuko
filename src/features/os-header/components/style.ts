import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 25px;
  background-color: var(--gray-900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  -webkit-app-region: drag;
  user-select: false;
  z-index: 5;
  position: fixed;
  top: 0;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  -webkit-app-region: no-drag;
`;

const Title = styled.h5`
  font-weight: 600;
  font-size: 12px;
  color: var(--white-900);
`;

export { Container, OptionWrapper, Title };
