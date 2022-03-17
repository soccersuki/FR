import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SortIcon from '@mui/icons-material/Sort';
import { grey, pink } from '@mui/material/colors';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" justifyContent="space-between">
      <Button variant="contained" startIcon={<ShuffleIcon />}  disableElevation sx={{width: '48%', bgcolor: grey[300], color: pink[500], borderRadius: '10px'}}  size="large">ランダム</Button>
      <Button variant="contained" startIcon={<SortIcon />}  disableElevation sx={{width: '48%', bgcolor: grey[300], color: pink[500], borderRadius: '10px'}}  size="large">並び替え</Button>
    </Stack>

  );
}
