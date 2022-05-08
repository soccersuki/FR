import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {IconButton, Typography} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import { pink, grey } from '@mui/material/colors';


export default function FoodList(props) {
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 500}}>
        {props.foods?.slice(0, 20).map((food, i) => {
          return(
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
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: pink[200], }}>
                  <LocalFireDepartmentTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={<Typography noWrap>{food[0]}</Typography>}
                secondary={<Typography fontSize={13}>{`${food[3]}kcal`}</Typography>}
              />
            </ListItem>
          )
        })}
      </List>
    </>
  );
}
