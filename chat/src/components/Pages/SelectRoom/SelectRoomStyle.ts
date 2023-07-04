import styled from 'styled-components';

import {Box, Stack, Typography} from '@mui/material';
import colors from '@src/default_variables';

export const SelecetRoomContainer = styled(Stack)`
  display: flex;
  padding: 0 1rem;
  height: calc(100% - 84px);
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  background-color: ${colors.dark};
`;
export const Title = styled(Typography)`
  color: ${colors.white};
`;

export const SelectRoomItems = styled(Box)`
  max-width: 720px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
