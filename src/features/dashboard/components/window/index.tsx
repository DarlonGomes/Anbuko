import {
  ChartPage,
  ExercisePage,
  MusicPage,
  NewsPage,
  RoutinePage,
  SettingsPage
} from '@/pages';
import React from 'react';

import { Container } from './style';

interface WindowProps {
  page: 'news' | 'routine' | 'exercises' | 'music' | 'chart' | 'settings';
}
export default function WindowRender({ page }: WindowProps) {
  return (
    <Container>
      {page === 'news' && <NewsPage />}
      {page === 'routine' && <RoutinePage />}
      {page === 'exercises' && <ExercisePage />}
      {page === 'music' && <MusicPage />}
      {page === 'chart' && <ChartPage />}
      {page === 'settings' && <SettingsPage />}
    </Container>
  );
}
