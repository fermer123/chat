import {Skeleton, Stack} from '@mui/material';
import {FC} from 'react';

const Loading: FC = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='text' />
    </Stack>
  );
};

export default Loading;
