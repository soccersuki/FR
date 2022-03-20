import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import { useState } from "react";

import {grey} from '@mui/material/colors'

export default function MyInput(props) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(text)
  }

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{ borderRadius: 2, display: 'flex', alignItems: 'center', width: '100%', bgcolor: grey[200] }}
      onSubmit={handleSubmit}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Paper>
  );
}
