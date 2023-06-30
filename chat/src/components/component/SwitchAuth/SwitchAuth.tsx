import {FC, memo} from 'react';

import {Switch} from '@mui/material';

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
