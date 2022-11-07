import React from 'react';
import styled from 'styled-components';

import duck from '../../../assets/images/duck.jpg';
import RoutineStep from './FormStep';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Backsplash = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 10px 0 50px;
  border-radius: 6px;
`;

const SectionTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.55px;
  color: var(--white-100);
`;
const FormWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 73px;
`;
export default function RoutineRender() {
  return (
    <Container>
      <Backsplash src={duck} alt="cool image" />
      <SectionTitle>Routine steps</SectionTitle>
      <FormWrapper>
        <RoutineStep
          image="racconbed"
          icon="ambient"
          title="Ambient"
          description="Help us know the kind of enviroment you will use our app"
          done
        />
        <RoutineStep
          image="chillingcoffee"
          icon="schedule"
          title="Schedule"
          description="Let's align your schedule"
          done={false}
        />
        <RoutineStep
          image="racconeating"
          icon="health"
          title="Uncomfortable"
          description="What makes you uncomfortable during your routine?"
          done={false}
        />
        <RoutineStep
          image="doglofi"
          icon="membership"
          title="Membership"
          description="Want to take a step further ? Checkout our plans"
          done={false}
        />
      </FormWrapper>
    </Container>
  );
}
