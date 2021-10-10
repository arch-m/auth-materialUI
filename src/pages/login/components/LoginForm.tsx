import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, Card, Checkbox, Divider, FormControlLabel, Stack, TextField, Typography } from '@mui/material';

export const LoginForm = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string()
      .required()
      .email('Invalid email'),
    password: yup.string().required(),
    check: yup.bool().oneOf([true], 'Check me please!'),
  }).required();


  const {
    register, 
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <Card>
      <Box 
        component="form"
        sx={{ 
          p: 2, display: 'flex' 
        }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Username</Typography>
          <TextField
            variant="outlined" 
            label="Username" 
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <Typography fontWeight={700}>Email</Typography>
          <TextField
            variant="outlined" 
            label="Email" 
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Typography fontWeight={700}>Password</Typography>
          <TextField 
            variant="filled" 
            label="Password" 
            type="password" 
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <FormControlLabel 
            control={<Checkbox {...label} {...register('check')}/>}
            label="Check me!"
          />
        </Stack>
        <Divider />
        <Stack
          direction="row"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </Box>
    </Card>
  );
}
