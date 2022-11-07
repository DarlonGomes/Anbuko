import React from 'react';

import chillingcofee from '../../../../assets/images/chillingcoffe.jpg';
import dogchilling from '../../../../assets/images/doglofi.jpeg';
import racconeating from '../../../../assets/images/racconeating.jpeg';
import racconbed from '../../../../assets/images/racconlofi.jpg';
import {
  Container,
  BacksplashContainer,
  Backsplash,
  IconBox,
  IconBg,
  StepInfo,
  InfoTitle,
  InfoDescription,
  StatusBox,
  Ambience,
  Schedule,
  Health,
  Membership,
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
        {type === 'ambient' && <Ambience />}
        {type === 'schedule' && <Schedule />}
        {type === 'health' && <Health />}
        {type === 'membership' && <Membership />}
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
  callback: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function RoutineStep({
  image,
  icon,
  title,
  description,
  done,
  callback,
}: RoutineStepProps) {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
      style={{
        transform: hover ? 'scale(1.06)' : 'scale(1)',
      }}
      onClick={() => callback(title)}
    >
      <BacksplashContainer>
        {image === 'racconbed' && (
          <Backsplash
            src={racconbed}
            alt={title}
            //   style={{
            //     filter: hover ? 'blur(0)' : 'blur(0.5px)',
            //     transform: hover ? 'scale(1.2)' : 'scale(1)',
            //   }}
          />
        )}
        {image === 'chillingcoffee' && (
          <Backsplash
            src={chillingcofee}
            alt={title}
            //   style={{
            //     filter: hover ? 'blur(0)' : 'blur(0.5px)',
            //     transform: hover ? 'scale(1.2)' : 'scale(1)',
            //   }}
          />
        )}
        {image === 'racconeating' && (
          <Backsplash
            src={racconeating}
            alt={title}
            //   style={{
            //     filter: hover ? 'blur(0)' : 'blur(0.5px)',
            //     transform: hover ? 'scale(1.2)' : 'scale(1)',
            //   }}
          />
        )}
        {image === 'doglofi' && (
          <Backsplash
            src={dogchilling}
            alt={title}
            //   style={{
            //     filter: hover ? 'blur(0)' : 'blur(0.5px)',
            //     transform: hover ? 'scale(1.2)' : 'scale(1)',
            //   }}
          />
        )}
      </BacksplashContainer>

      <IconWrapper type={icon} />
      <StepInfo>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description} </InfoDescription>
        <StatusWrapper type={done} />
      </StepInfo>
    </Container>
  );
}
