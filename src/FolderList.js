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

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';




export default function FolderList(props) {
  const {foods} = props
  const listItems = foods.slice(0, 10).map((food, i) =>
    <ListItem onClick={() => props.handleClick(i)}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={food[0]} secondary={`カロリー: ${String(food[3])}kcal | たんぱく質: ${String(food[6])}g | 脂質: ${String(food[4])}g | 炭水化物: ${String(food[5])}g`} />
    </ListItem>
  );
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {listItems}
      </List>
    </>
  );
}
