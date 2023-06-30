import styled from 'styled-components';

import {Box} from '@mui/material';
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
export const ChatContainerContent = styled(Box)`
  display: flex;
  padding: 1rem 1rem;
  background-color: ${colors.dark};
  height: calc(100% - 84px - 1rem);
`;
