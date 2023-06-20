import {FC} from 'react';
import styled from 'styled-components';

import {Box, Skeleton} from '@mui/material';

const SelectRoom = styled(Box)`
  height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 1rem;
  padding: 0 10px;
`;
const UserName = styled(Skeleton)`
  margin: 0 auto;
`;

const LoadingRoom: FC = () => {
  return (
    <SelectRoom>
      <UserName
        data-testid='skeleton'
        variant='rounded'
        width={310}
        height={72}
      />
      <Skeleton data-testid='skeleton' variant='rounded' height={55} />
      <Skeleton data-testid='skeleton' variant='rounded' height={55} />
    </SelectRoom>
  );
};

export default LoadingRoom;
