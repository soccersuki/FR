import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import itemData from './itemData'

export default function TitlebarImageList(props) {
  return (
    <ImageList sx={{ width: '100%', my: 1}} gap={8}>
      {itemData.map((item, id) => (
        <ImageListItem key={item.img} onClick={() => props.handleClick(id)}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius: 10}}
          />
          <ImageListItemBar
            title={item.title}
            sx={{backgroundColor: 'transparent'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
