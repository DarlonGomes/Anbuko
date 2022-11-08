import { BsPatchCheckFill, BsCalendar3 } from 'react-icons/bs';
import { MdHomeWork, MdCardMembership } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import styled from 'styled-components';

const Container = styled.div`
  width: 230px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-900);
  border-radius: 6px;
  position: relative;
  border: 1px solid var(--black-900);
  transition: transform 0.6s;
  cursor: pointer;
`;

const BacksplashContainer = styled.div`
  border-radius: 6px 6px 0 0;
  width: 100%;
  height: 166px;
  overflow: hidden;
`;
const Backsplash = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 1s, filter 2s ease-in-out;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
`;

const IconBox = styled.div`
  background-color: var(--gray-900);
  width: 40px;
  height: 40px;
  border-radius: 5px 5px 0 0;
  position: absolute;
  box-sizing: border-box;
  padding: 4px;
  left: 10px;
  bottom: 98px;
`;

const IconBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--trans-white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const StepInfo = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 20px 10px;
  position: relative;
`;

const InfoTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.55px;
  color: var(--white-100);
`;

const InfoDescription = styled.p`
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.25px;
  color: var(--white-100);
  text-justify: kashida;
  margin-top: 10px;
`;

const StatusBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Ambience = styled(MdHomeWork)`
  font-size: 25px;
  color: var(--gray-100);
`;

const Schedule = styled(BsCalendar3)`
  font-size: 25px;
  color: var(--gray-100);
`;

const Health = styled(RiMentalHealthLine)`
  font-size: 25px;
  color: var(--gray-100);
`;

const Membership = styled(MdCardMembership)`
  font-size: 25px;
  color: var(--gray-100);
`;
const Done = styled(BsPatchCheckFill)`
  font-size: 32px;
  color: var(--green-600-10);
`;
export {
  Container,
  BacksplashContainer,
  Backsplash,
  IconBg,
  IconBox,
  StepInfo,
  InfoDescription,
  InfoTitle,
  StatusBox,
  Ambience,
  Schedule,
  Health,
  Membership,
  Done,
};
