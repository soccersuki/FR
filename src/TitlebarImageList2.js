import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarImageList2(props) {
  return (
    <ImageList sx={{ width: '100%', my: 1}} gap={props.gap ?? 8} rowHeight={130}>
      {props.itemData.map((item, id) => (
        <ImageListItem key={item.img} onClick={() => props.handleClick(id)}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius: props.radius ?? 10, height: 100}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
