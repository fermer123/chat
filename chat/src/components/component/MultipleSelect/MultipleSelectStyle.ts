/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

import {Box, InputLabel, MenuItem, OutlinedInput, Select} from '@mui/material';
import colors from '@src/default_variables';

export const SelectRoom = styled(Box)<{open: boolean}>`
  width: 100%;
  margin-bottom: ${({open}) => (open ? 'calc((48px*3) + 1rem)' : '0px')};
`;

export const InputLabelText = styled(InputLabel)`
  color: ${colors.white};
  margin-bottom: 0.5rem;
`;

export const SelectItem = styled(Select)({
  border: `0.5px solid ${colors.white}`,
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${colors.white} !important`,
    borderWidth: '0px !important',
  },
  '.MuiSelect-iconOutlined': {
    fill: `${colors.white} !important`,
  },
  '&.MuiMenu-list': {
    padding: `0 !important`,
  },
});

export const OutlinedInputItem = styled(OutlinedInput)`
  color: ${colors.white};
`;

export const OutlinedMenuItem = styled(MenuItem)({
  backgroundColor: colors.blueGrey,
  width: '100%',
  color: colors.white,
  padding: '0px 0px !important',
  '&:hover': {
    backgroundColor: colors.dark,
  },
  '&.Mui-selected': {
    backgroundColor: `${colors.dark} !important`,
  },
  '&.MuiMenuItem-gutters': {
    paddingLeft: `12px !important`,
  },
  '&.MuiMenuItem-divider': {
    padding: `0 !important`,
  },
});
