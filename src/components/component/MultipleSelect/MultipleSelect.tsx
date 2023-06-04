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
  selectRoom: string;
  setSelectRoom: (room: string) => void;
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
      setSelectRoom(typeof value === 'string' ? value : null);
    },
    [setSelectRoom],
  );
  const selectList = ['1', '2', '3'];
  return (
    <SelectRoom>
      <InputLabel id='demo-multiple-name-label'>select room</InputLabel>
      <Select
        fullWidth
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        value={selectRoom}
        onChange={handleChange}
        data-testid='select'
        input={<OutlinedInput label='room number' />}>
        {selectList.map((room) => (
          <MenuItem key={room} value={room}>
            {room}
          </MenuItem>
        ))}
      </Select>
    </SelectRoom>
  );
};
export default memo(MultipleSelect);
