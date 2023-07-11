import styled from 'styled-components';

import {Container, Typography} from '@mui/material';
import colors from '@src/default_variables';

export const MessageContainer = styled(Container)<{defineUser: boolean}>(
  ({defineUser}) => ({
    width: '100%',
    textAlign: defineUser ? 'end' : 'start',
  }),
);

export const DialogName = styled(Typography)({
  color: colors.white,
});
export const DialogMessage = styled(Typography)({
  color: colors.white,
});
