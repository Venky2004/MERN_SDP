import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width:1200, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
    
  },
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
    cols: 2,
  },
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
    cols: 2,
  },
  {
    img: 'https://picsum.photos/seed/picsum/200/300',
    cols: 2,
  },
];