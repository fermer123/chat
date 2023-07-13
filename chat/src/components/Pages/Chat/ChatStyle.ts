import styled from 'styled-components';

import {Box, TextField, Typography} from '@mui/material';
import colors from '@src/default_variables';

export const ChatContainer = styled(Box)`
  height: 100vh;
`;
export const ChatContainerHead = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  background-color: ${colors.blueGrey};
  max-height: 84px;
  height: 100%;
`;

export const RoomName = styled(Typography)({
  color: colors.white,
  fontSize: '2rem',
});
export const ChatContainerContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  gap: 1rem;
  background-color: ${colors.dark};
  height: calc(100% - 84px);
  padding-bottom: 5rem;
`;

export const ChatContentDialog = styled(Box)`
  width: 100%;
  max-height: calc(100% - 56px - 1rem);
  height: 100%;
  border: 1px solid ${colors.white};
  overflow-y: scroll;
`;

export const ChatContentMessage = styled(TextField)({
  '& .MuiInputLabel-outlined': {
    color: colors.white,
    borderColor: colors.white,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline ': {
    borderColor: colors.white,
    borderWidth: '0.5px ',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    color: colors.white,
    borderColor: colors.white,
  },
  '& .MuiInputBase-input': {
    color: colors.white,
  },
});
