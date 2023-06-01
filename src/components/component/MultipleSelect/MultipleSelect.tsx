import {
  Box,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {FC, memo, useCallback} from 'react';
import styled from 'styled-components';

const SelectRoom = styled(Box)`
  width: 100%;
`;

export interface IMultipleSelectProps {
  selectRoom: number;
  setSelectRoom: (room: number) => void;
}

const MultipleSelect: FC<IMultipleSelectProps> = ({
  selectRoom,
  setSelectRoom,
}) => {
  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof selectRoom>) => {
      const {
        target: {value},
      } = event;
      setSelectRoom(typeof value === 'number' ? value : null);
    },
    [setSelectRoom],
  );

  return (
    <SelectRoom>
      <InputLabel id='demo-multiple-name-label'>select room</InputLabel>
      <Select
        fullWidth
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        value={selectRoom}
        onChange={handleChange}
        input={<OutlinedInput label='room number' />}>
        {[1, 2, 3].map((room) => (
          <MenuItem key={room} value={room}>
            {room}
          </MenuItem>
        ))}
      </Select>
    </SelectRoom>
  );
};
export default memo(MultipleSelect);
