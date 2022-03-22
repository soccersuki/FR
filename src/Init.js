function Init(){
  const [activeStep, setActiveStep] = useState(0);
  const [cookies, setCookie] = useCookies(['name']);
  const [info, setInfo] = useState({});
  const handleClickButton = (id) => {
    setInfo({...info, sex: id})
    setActiveStep(activeStep + 1)
  }
  const handleClick = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const buttons = (
    <Stack spacing={2} sx={{width: '100%'}}>
      <Stack direction="row" spacing={2} sx={{width: '100%'}} justifyContent="center" alignItems="center">
        <Button onClick={() => handleClickButton(0)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
        <Button onClick={() => handleClickButton(1)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{width: '100%'}} justifyContent="center" alignItems="center">
        <Button onClick={() => handleClickButton(2)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
        <Button onClick={() => handleClickButton(3)} variant="outlined" sx={{width: '30%', aspectRatio: '1', borderRadius: 10}}>
          <Stack>
            <LocalFireDepartmentIcon sx={{fontSize: 40}}/>
            <Typography>item</Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  )

  const pages = [
    buttons,
    <>
      <InputBase placeholder='0' type='number' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', style: { textAlign: 'center' } }} sx={{fontSize: 40, width: '20%'}}/>
      <Typography>cm</Typography>
    </>
  ]

  return (
    <Box sx={{height: window.innerHeight}}>
      <Box sx={{height: '100%'}}>
        <Box sx={{height: '80%'}}>
          {activeStep == 0 ?
            <Box sx={{height: '100%', alignContent: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
              <LocalFireDepartmentIcon sx={{fontSize: 300, color: pink[500]}}/>
            </Box>
            :
            <Stack justifyContent="flex-start" alignItems="center">
              <ProgressMobileStepper sx={{my: 2}} activeStep={activeStep} handleBack={handleBack}/>
              <LocalFireDepartmentIcon sx={{fontSize: 50, my: 2}}/>
              <Typography sx={{my: 2}}>まずは</Typography>
              {pages[activeStep-1]}
            </Stack>
          }
        </Box>
        {activeStep == 0 &&
          <Box sx={{height: '20%', alignContent: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Fab color='secondary' variant='extended' onClick={handleClick} sx={{width: '60%'}}><Typography sx={{color: 'white'}}>次へ</Typography></Fab>
          </Box>
        }
      </Box>
    </Box>
  )
}
