import styled from 'styled-components';

import {Box, InputLabel, MenuItem, OutlinedInput, Select} from '@mui/material';
import colors from '@src/default_variables';

export const SelectRoom = styled(Box)`
  width: 100%;
`;

export const InputLabelText = styled(InputLabel)`
  color: ${colors.white};
  margin-bottom: 0.5rem;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SelectItem = styled(Select)(({theme}) => ({
  border: `1px solid ${colors.white}`,
}));

export const OutlinedInputItem = styled(OutlinedInput)`
  color: ${colors.white};
`;

export const OutlinedMenuItem = styled(MenuItem)(({theme}) => ({
  backgroundColor: colors.blueGrey,
  '&:hover': {
    backgroundColor: colors.dark,
  },
  '& .Mui-selected:hover': {
    '&:hover': {
      backgroundColor: 'none',
    },
  },
}));
