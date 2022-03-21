import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import {IconButton, ListItemButton, } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { green, pink } from '@mui/material/colors';


export default function FolderList(props) {
  const {foods} = props
  const listItems = foods?.slice(0, 20).map((food, i) =>
    <>
    <ListItem onClick={() => props.handleClick(i)}
      secondaryAction={
        <IconButton edge="end">
          <ArrowForwardIosIcon />
        </IconButton>
      }
      divider
      disablePadding
      disableGutters
    >
      <ListItemButton disableGutters>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: green[300] }} variant='rounded'>
          {food[0][0]}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={food[0]} secondary={`${String(food[3])}kcal`} />
      </ListItemButton>
    </ListItem>
    </>
  );
  return (
    <>
      <List dense sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {listItems}
      </List>
    </>
  );
}
