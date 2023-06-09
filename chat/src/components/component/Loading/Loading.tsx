import {FC} from 'react';
import styled from 'styled-components';

import {Box, Skeleton} from '@mui/material';

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
      <Skeleton data-testid='skeleton' variant='rounded' height={55} />
      <Skeleton data-testid='skeleton' variant='rounded' height={55} />
      <SwithAuthForm>
        <Skeleton
          data-testid='skeleton'
          variant='rounded'
          width={600}
          height={55}
        />
        <Skeleton
          data-testid='skeleton'
          variant='rounded'
          width={120}
          height={55}
        />
      </SwithAuthForm>
    </Auth>
  );
};

export default Loading;
