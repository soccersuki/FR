import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SortIcon from '@mui/icons-material/Sort';
import { grey, pink } from '@mui/material/colors';

import {Menu, MenuItem, MenuList} from '@mui/material'


export default function BasicButtons(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    setAnchorEl(null);
    props.handleClick2(id);
  };
  return (
    <Stack spacing={2} direction="row" justifyContent="space-between">
      <Button onClick={props.handleClick1} variant="contained" startIcon={<ShuffleIcon />}  disableElevation sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px'}}  size="large"><b>ランダム</b></Button>
      <Button onClick={handleClick} variant="contained" startIcon={<SortIcon />}  disableElevation sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px'}}  size="large"><b>並び替え</b></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList dense disablePadding>
        <MenuItem divider onClick={() => handleClose(0)}>カロリー多い順</MenuItem>
        <MenuItem divider onClick={() => handleClose(1)}>カロリー少ない順</MenuItem>
        <MenuItem onClick={() => handleClose(2)}>人気順</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
}
