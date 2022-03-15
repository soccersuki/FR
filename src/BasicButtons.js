import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function BasicButtons() {
  return (
    <Box sx={{m: 2}}>
    <Stack spacing={2} direction="row" justifyContent="space-between">
      <Button variant="contained" sx={{width: '45%'}}>Contained</Button>
      <Button variant="outlined" sx={{width: '45%'}}>Outlined</Button>
    </Stack>
    </Box>

  );
}
