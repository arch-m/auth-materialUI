import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box, Button, Card, Checkbox, Divider,
  FormControl, FormControlLabel, FormHelperText, Paper,
  Stack, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  // background: 'green',
}));

export const LoginForm = () => {
  const label = {inputProps: {'aria-label': 'Checkbox demo'}};

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string()
        .required()
        .email('Invalid email'),
    password: yup.string().required(),
    check: yup.bool().oneOf([true], 'check me please!'),
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
          p: 2,
          display: 'flex',
          background: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={0.1}
          // sx={{
          //   background: 'yellow',
          // }}
        >
          <Item variant="outlined" square>
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
            <FormControl
              required
              fullWidth
              error={!!errors.check}
              component="fieldset"
              sx={{mt: 1}}
              variant="outlined"
            >
              <FormControlLabel
                control={
                  <Checkbox {...label} {...register('check')}/>
                }
                label="Check me!"
              />
              <FormHelperText>{errors.check?.message}</FormHelperText>
            </FormControl>
            <Divider light
              sx = {{mb: 1.5, mt: 1, ml: -2, mr: -2}}
            />
            <Button variant="contained" type="submit">Submit</Button>
            {/* </Item>
          <Item variant="outlined" square> */}
          </Item>
        </Stack>
        {/* <Stack
          direction="row"
          sx={{px: 2, py: 1, bgcolor: 'background.default'}}
        >
        </Stack> */}
      </Box>
    </Card>
  );
};

