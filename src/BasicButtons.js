import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SortIcon from '@mui/icons-material/Sort';
import { grey, pink } from '@mui/material/colors';

import {Menu, MenuItem, MenuList, NativeSelect, Paper, InputBase, Typography} from '@mui/material'


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
  // <Button onClick={props.handleClick1} variant="contained" startIcon={<ShuffleIcon />}  disableElevation sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px'}}  size="large"><b>ランダム</b></Button>
  // <Button onClick={handleClick} variant="contained" startIcon={<SortIcon />}  disableElevation sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px'}}  size="large"><b>並び替え</b></Button>

  return (
    <Stack spacing={2} direction="row" justifyContent="space-between" sx={{width: '100%'}}>
      <Paper elevation={0} onClick={props.handleClick1} sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px'}}>
      <Stack direction="row" alignItems='center'sx={{m: 1}} justifyContent="center">
        <ShuffleIcon />
        <Typography fontSize={13} color={pink[200]}>ランダム</Typography>
      </Stack>
      </Paper>
      <Paper elevation={0} sx={{width: '48%', bgcolor: grey[200], color: pink[200], borderRadius: '10px'}}>
        <Stack direction="row" alignItems='center' justifyContent="center"sx={{boxSizing: 'border-box', p: 1}}>
        <SortIcon />
        <Paper elevation={0} component='select' sx={{bgcolor: grey[200], color: pink[200], outline: 'none', border: 'none', fontSize: 13}}>
          <option>カロリー多</option>
          <option>カロリー少</option>
          <option>人気順</option>
        </Paper>

        </Stack>

      </Paper>

    </Stack>
  );
}
