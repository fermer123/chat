import {Switch} from '@mui/material';
import {FC, memo} from 'react';

export interface ISwitchAuth {
  switchAuthForm: () => void;
  switchAuth: boolean;
}

const SwitchAuth: FC<ISwitchAuth> = ({switchAuthForm, switchAuth}) => {
  return (
    <Switch
      data-testid='switch-auth'
      checked={switchAuth}
      onChange={switchAuthForm}
    />
  );
};

export default memo(SwitchAuth);
