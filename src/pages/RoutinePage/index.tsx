import RoutineRender from '@/features/routine/components';
import React from 'react';

interface PageProps {
  callback: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function RoutinePage({ callback }: PageProps) {
  return <RoutineRender callback={callback} />;
}
