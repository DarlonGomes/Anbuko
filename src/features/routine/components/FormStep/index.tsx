import React from 'react';

import raccoon from '../../../../assets/images/racconlofi.jpg';
import {
  Container,
  Backsplash,
  IconBox,
  IconBg,
  StepInfo,
  InfoTitle,
  InfoDescription,
  StatusBox,
  Ambience,
  Done,
} from './style';

interface StatusProps {
  type: boolean;
}
function StatusWrapper({ type }: StatusProps) {
  return <StatusBox>{type && <Done />}</StatusBox>;
}
interface IconProps {
  type: string;
}
function IconWrapper({ type }: IconProps) {
  return (
    <IconBox>
      <IconBg>
        <Ambience />
      </IconBg>
    </IconBox>
  );
}

interface RoutineStepProps {
  image: string;
  icon: string;
  title: string;
  description: string;
  done: boolean;
}
export default function RoutineStep({
  image,
  icon,
  title,
  description,
  done,
}: RoutineStepProps) {
  return (
    <Container>
      <Backsplash src={raccoon} alt={title} />
      <IconWrapper type={icon} />
      <StepInfo>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description} </InfoDescription>
        <StatusWrapper type={done} />
      </StepInfo>
    </Container>
  );
}
