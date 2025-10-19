import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
  useTheme,
} from '@mui/material';

const ProfileForm = () => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      address1: '',
      address2: '',
      role: '',
    }
  });

  const onSubmit = (data) => {
    console.log('Form Data (Valid):', data);
  };

  const roles = ['Admin', 'Manager', 'User'];

  return (
    <Box sx={{ width: '87vw', p: 2, margin: { xs: '15%', sm: '0% 10%', md: '5% 5%' } }}>
      <Box sx={{ mb: 3 }}>
        <Typography color={theme.palette.primary.main} variant="h4" fontWeight="bold">
          CREATE USER
        </Typography>
        <Typography color="text.secondary">
          Create a New User Profile
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            {...register("firstName", { required: "First Name is required" })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            {...register("lastName", { required: "Last Name is required" })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Box>
        <TextField
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entered value does not match email format",
            },
          })}
          label="Email"
          variant="filled"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("contactNumber", { required: "Contact Number is required" })}
          label="Contact Number"
          variant="filled"
          error={!!errors.contactNumber}
          helperText={errors.contactNumber?.message}
        />
        <TextField
          {...register("address1", { required: "Address 1 is required" })}
          label="Address 1"
          variant="filled"
          error={!!errors.address1}
          helperText={errors.address1?.message}
        />
        <TextField
          {...register("address2",{ required: "Address 2 is required" } )}
          label="Address 2"
          variant="filled"
                 error={!!errors.address1}
          helperText={errors.address1?'Address 2 is required':''}
        />

        <FormControl variant="filled" error={!!errors.role}>
          <Controller
            name="role"
            control={control}
            rules={{ required: 'Please select a role' }}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: theme.palette.text.secondary }}>Select User Role</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem disabled value="">
                  <em>Select User Role</em>
                </MenuItem>
                {roles.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.role && <Typography sx={{ color: 'error.main', fontSize: '0.75rem', ml: 2 }}>{errors.role.message}</Typography>}
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button type="submit" variant="contained"  size="large">
            Create New User
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileForm;
