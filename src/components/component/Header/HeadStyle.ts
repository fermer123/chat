import styled from 'styled-components';

import {Box, Button} from '@mui/material';
import colors from '@src/default_variables';

export const HeaderContainer = styled(Box)`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.blueGrey};
`;

export const AvatarButton = styled(Button)`
  background-color: transparent;
`;
export const PopoverList = styled(Box)`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;
