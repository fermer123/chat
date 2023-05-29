import {Skeleton, Box} from '@mui/material';
import {FC} from 'react';
import styled from 'styled-components';

const Auth = styled(Box)`
  height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 1rem;
  padding: 0 10px;
`;
const SwithAuthForm = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Loading: FC = () => {
  return (
    <Auth>
      <Skeleton variant='rounded' height={55} />
      <Skeleton variant='rounded' height={55} />
      <SwithAuthForm>
        <Skeleton variant='rounded' width={600} height={55} />
        <Skeleton variant='rounded' width={120} height={55} />
      </SwithAuthForm>
    </Auth>
  );
};

export default Loading;
