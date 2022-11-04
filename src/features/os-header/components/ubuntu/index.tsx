import React from 'react';

import { Container, OptionWrapper, Title } from '../style';
import { Button } from './buttons/button';

export default function OSUbuntu() {
  return (
    <Container>
      <Title>Reminder with Steroids</Title>
      <OptionWrapper>
        <Button method="minimize" />
        <Button method="resize" />
        <Button method="close" />
      </OptionWrapper>
    </Container>
  );
}
