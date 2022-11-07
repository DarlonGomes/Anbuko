import { AiOutlineBarChart } from 'react-icons/ai';
import { BiNews, BiDumbbell } from 'react-icons/bi';
import { GiMountains } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbClipboardText, TbBrandSpotify } from 'react-icons/tb';
import styled from 'styled-components';

const Container = styled.div`
  width: 40px;
  height: calc(100% - 25px);
  background-color: var(--gray-900);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 5px 0;
  border-radius: 0 0 0 5px;
`;

const Divider = styled.div`
  height: 2px;
  width: 20px;
  background-color: var(--gray-400);
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InteractableBox = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px 0 0 5px;
`;

const Logo = styled(GiMountains)`
  font-size: 30px;
`;

const Journal = styled(BiNews)`
  font-size: 30px;
`;

const Exercise = styled(BiDumbbell)`
  font-size: 30px;
`;

const Form = styled(TbClipboardText)`
  font-size: 30px;
`;

const Spotify = styled(TbBrandSpotify)`
  font-size: 30px;
`;

const Chart = styled(AiOutlineBarChart)`
  font-size: 30px;
`;

const Settings = styled(IoSettingsOutline)`
  font-size: 30px;
`;
export {
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
};
