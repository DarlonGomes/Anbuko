import { ChoosenPage } from '@/pages/MainPage';
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
  type: 'news' | 'routine' | 'exercises' | 'music' | 'chart' | 'settings';
  page: 'news' | 'routine' | 'exercises' | 'music' | 'chart' | 'settings';
  callback: React.Dispatch<React.SetStateAction<ChoosenPage>>;
}
function Icon({ page, type, callback }: IconProps) {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <InteractableBox
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
      onClick={() => callback(type)}
      style={{
        backgroundColor:
          hover || page === type ? 'var(--bg-gray-400) ' : 'var(--gray-900)',
      }}
    >
      {type === 'news' && (
        <Journal
          style={{
            color:
              hover || page === type ? 'var(--white-100)' : 'var(--black-900)',
          }}
        />
      )}
      {type === 'routine' && (
        <Form
          style={{
            color:
              hover || page === type ? 'var(--white-100)' : 'var(--black-900)',
          }}
        />
      )}
      {type === 'exercises' && (
        <Exercise
          style={{
            color:
              hover || page === type ? 'var(--white-100)' : 'var(--black-900)',
          }}
        />
      )}
      {type === 'music' && (
        <Spotify
          style={{
            color:
              hover || page === type ? 'var(--white-100)' : 'var(--black-900)',
          }}
        />
      )}
      {type === 'chart' && (
        <Chart
          style={{
            color:
              hover || page === type ? 'var(--white-100)' : 'var(--black-900)',
          }}
        />
      )}
      {type === 'settings' && (
        <Settings
          style={{
            color:
              hover || page === type ? 'var(--white-100)' : 'var(--black-900)',
          }}
        />
      )}
    </InteractableBox>
  );
}

interface NavBarProps {
  page: 'news' | 'routine' | 'exercises' | 'music' | 'chart' | 'settings';
  callback: React.Dispatch<React.SetStateAction<ChoosenPage>>;
}
export default function NavBar({ page, callback }: NavBarProps) {
  return (
    <Container>
      <Logo />
      <Divider />
      <BoxWrapper>
        <Icon callback={callback} page={page} type="news" />
        <Icon callback={callback} page={page} type="routine" />
        <Icon callback={callback} page={page} type="exercises" />
        <Icon callback={callback} page={page} type="music" />
        <Icon callback={callback} page={page} type="chart" />
        <Icon callback={callback} page={page} type="settings" />
      </BoxWrapper>
    </Container>
  );
}
