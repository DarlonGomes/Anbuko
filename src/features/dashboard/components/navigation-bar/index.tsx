import React from 'react';

import { Container, Divider, BoxWrapper, InteractableBox, Logo } from './style';

export default function NavBar() {
  return (
    <Container>
      <Logo />
      <Divider />
      <BoxWrapper>
        <InteractableBox>
          <Logo />
        </InteractableBox>
        <InteractableBox>
          <Logo />
        </InteractableBox>
        <InteractableBox>
          <Logo />
        </InteractableBox>
        <InteractableBox>
          <Logo />
        </InteractableBox>
        <InteractableBox>
          <Logo />
        </InteractableBox>
      </BoxWrapper>
    </Container>
  );
}
