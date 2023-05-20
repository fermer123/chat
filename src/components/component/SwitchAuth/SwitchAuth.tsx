import {Switch} from '@mui/material';
import {FC, memo} from 'react';

interface ISwitchAuth {
  switchAuthForm: () => void;
  switchAuth: boolean;
}

const SwitchAuth: FC<ISwitchAuth> = ({switchAuthForm, switchAuth}) => {
  return <Switch checked={switchAuth} onChange={switchAuthForm} />;
};

export default memo(SwitchAuth);
