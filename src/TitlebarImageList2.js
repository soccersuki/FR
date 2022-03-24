import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import itemData from './itemData'

export default function TitlebarImageList2(props) {
  return (
    <ImageList sx={{ width: '100%', my: 1}} gap={8} rowHeight={130}>
      {props.itemData.map((item, id) => (
        <ImageListItem key={item.img} onClick={() => props.handleClick(id)}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius: 10, height: 100}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
