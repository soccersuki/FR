import {Box, Stack, Typography, Fab, Zoom} from '@mui/material'


export default function Page(props){
  return(
    <Box>
      <Stack alignItems="center" sx={{width: '100%'}}>
        <Box sx={{mt: 1}}><Zoom in={true}>{props.icon}</Zoom></Box>
        <Typography sx={{mt: 1}} fontSize={20}><b>{props.text}</b></Typography>
        {props.children}
      </Stack>
      {props.handleClick &&
        <Box sx={{width: '100%', textAlign: 'center', position: 'fixed', bottom: 20}}>
          <Fab color='secondary' variant='extended' onClick={props.handleClick} sx={{width: '80%'}}>
            <Typography sx={{color: 'white'}}>次へ</Typography>
          </Fab>
        </Box>
      }
    </Box>
  )
}
