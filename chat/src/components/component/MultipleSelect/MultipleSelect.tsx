import {FC, memo, useCallback, useState} from 'react';

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
  const [open, setOpen] = useState<boolean>(false);
  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof selectRoom>) => {
      const {
        target: {value},
      } = event;
      setSelectRoom(typeof value === 'string' ? value : null);
    },
    [setSelectRoom],
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const selectList = ['1', '2', '3'];
  return (
    <SelectRoom open={open}>
      <InputLabelText id='demo-multiple-name-label'>select room</InputLabelText>
      <SelectItem
        fullWidth
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        value={selectRoom}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
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
