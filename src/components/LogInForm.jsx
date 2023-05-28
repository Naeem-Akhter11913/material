import React from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const LogInForm = () => {
  return (
    <div className='outer'>
      <div className="inner">
        <h1 style={{ textAlign: 'center' }}>LogIn Form</h1>

        <Box
          component='form'
          sx={{ '& .MuiTextField-root': { m: 0.8, width: '100%' } }}
          noValidate
          autoComplete='off'
        >

          <TextField
            required
            label='First Name'
            variant='standard'
            type='text'
          />
          <TextField
            required
            label='Second Name'
            variant='standard'
            type='text'
          />
          <TextField
            required
            label='Email'
            variant='standard'
            type='email'
          />

          <TextField
            required
            label='password'
            variant='standard'
            type='password'
          />


          <TextField
            required
            label='Confirm Password'
            variant='standard'
            type='password'
          />

          <Checkbox id='' />
          <Button variant='outlined' >Submit</Button>
        </Box>
      </div>
    </div>
  )
}

export default LogInForm