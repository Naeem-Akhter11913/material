import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'


const GridForm = () => {
  return (
    <div>
        <Box sx={{flexGrow: 1}}>
        <Grid container splacing = {2}>
            <Grid item xs={6}>
                <TextField
                    type = 'text'
                    sx={{width: '100%'}}
                    variant='standard'
                    label = 'Enter Village Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type = 'text'
                    sx={{width: '100%'}}
                    variant='standard'
                    label = 'Enter Village Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type = 'text'
                    sx={{width: '100%'}}
                    variant='standard'
                    label = 'Enter Village Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type = 'text'
                    sx={{width: '100%'}}
                    variant='standard'
                    label = 'Enter Village Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type = 'text'
                    sx={{width: '100%'}}
                    variant='standard'
                    label = 'Enter Village Name'
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type = 'text'
                    sx={{width: '100%'}}
                    variant='standard'
                    label = 'Enter Village Name'
                />
            </Grid>


        </Grid>
        </Box>
    </div>
  )
}

export default GridForm