import {FC, memo, useCallback} from 'react';

import {SelectChangeEvent} from '@mui/material';

import {
  InputLabelText,
  OutlinedInputItem,
  OutlinedMenuItem,
  SelectItem,
  SelectRoom,
} from './MultipleSelectStyle';

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
      <InputLabelText id='demo-multiple-name-label'>select room</InputLabelText>
      <SelectItem
        fullWidth
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        value={selectRoom}
        onChange={handleChange}
        data-testid='select'
        input={<OutlinedInputItem label='room number' />}>
        {selectList.map((room) => (
          <OutlinedMenuItem key={room} value={room}>
            {room}
          </OutlinedMenuItem>
        ))}
      </SelectItem>
    </SelectRoom>
  );
};
export default memo(MultipleSelect);
