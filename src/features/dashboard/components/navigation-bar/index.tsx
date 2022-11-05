import React from 'react';

import {
  Container,
  Divider,
  BoxWrapper,
  InteractableBox,
  Logo,
  Journal,
  Exercise,
  Form,
  Spotify,
  Chart,
  Settings,
} from './style';

interface IconProps {
  type: 'news' | 'form' | 'exercise' | 'music' | 'dashboard' | 'settings';
}
function Icon({ type }: IconProps) {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <InteractableBox
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
      style={{
        backgroundColor: hover ? 'var(--bg-gray-400) ' : 'var(--gray-900)',
      }}
    >
      {type === 'news' && (
        <Journal
          style={{ color: hover ? 'var(--white-100)' : 'var(--black-900)' }}
        />
      )}
      {type === 'form' && (
        <Form
          style={{ color: hover ? 'var(--white-100)' : 'var(--black-900)' }}
        />
      )}
      {type === 'exercise' && (
        <Exercise
          style={{ color: hover ? 'var(--white-100)' : 'var(--black-900)' }}
        />
      )}
      {type === 'music' && (
        <Spotify
          style={{ color: hover ? 'var(--white-100)' : 'var(--black-900)' }}
        />
      )}
      {type === 'dashboard' && (
        <Chart
          style={{ color: hover ? 'var(--white-100)' : 'var(--black-900)' }}
        />
      )}
      {type === 'settings' && (
        <Settings
          style={{ color: hover ? 'var(--white-100)' : 'var(--black-900)' }}
        />
      )}
    </InteractableBox>
  );
}

export default function NavBar() {
  return (
    <Container>
      <Logo />
      <Divider />
      <BoxWrapper>
        <Icon type="news" />
        <Icon type="form" />
        <Icon type="exercise" />
        <Icon type="music" />
        <Icon type="dashboard" />
        <Icon type="settings" />
      </BoxWrapper>
    </Container>
  );
}
