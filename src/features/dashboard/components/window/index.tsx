import FormModal from '@/features/routine/components/FormModal';
import {
  ChartPage,
  ExercisePage,
  MusicPage,
  NewsPage,
  RoutinePage,
  SettingsPage,
} from '@/pages';
import React from 'react';

import { Container } from './style';

interface WindowProps {
  page: 'news' | 'routine' | 'exercises' | 'music' | 'chart' | 'settings';
}
export default function WindowRender({ page }: WindowProps) {
  const [formStep, setFormStep] = React.useState<string | null>(null);
  return (
    <Container>
      <FormModal step={formStep} callback={setFormStep} />
      {page === 'news' && <NewsPage />}
      {page === 'routine' && <RoutinePage callback={setFormStep} />}
      {page === 'exercises' && <ExercisePage />}
      {page === 'music' && <MusicPage />}
      {page === 'chart' && <ChartPage />}
      {page === 'settings' && <SettingsPage />}
    </Container>
  );
}
