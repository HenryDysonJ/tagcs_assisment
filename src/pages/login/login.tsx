import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/formInput';
import { handleLogin } from '../../redux/authSlice';
import { loginStyle } from '../style';

export const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [formError, setFormError] = useState({ email: false, password: false });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setFormError((prev) => ({ ...prev, [e.target.name]: false, }));
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        if (!form?.email || !form.password) return;

        const savedUserStr = localStorage.getItem(form.email);

        if (!savedUserStr) {
            return alert('Invalid credentials');
        }

        const savedUser = JSON.parse(savedUserStr);

        if (savedUser.password !== form.password) {
            return alert('Invalid credentials');
        }

        dispatch(handleLogin(savedUser));
        navigate('/dashboard');

    };

    return (
        <Grid container spacing={5} sx={loginStyle.rootSx}>
            <Grid size={{ xs: 12 }}>
                <Box maxWidth="500px" width="100%">
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={loginStyle.TypographySx}>
                        Login
                    </Typography>

                    <FormInput
                        inputLabel="Email address"
                        placeholder="Enter your email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type="email"
                        name='email'
                        error={formError?.email}
                        onChange={handleChange}
                    />
                    <FormInput
                        inputLabel="Password"
                        placeholder="Enter your password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type="password"
                        name='password'
                        error={formError?.password}
                        onChange={handleChange}
                    />

                    <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                        Signup
                    </Button>

                    <Divider sx={{ ...loginStyle.linkText, my: 3 }}>Or</Divider>

                    <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            sx={{ textTransform: 'none' }}
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<AppleIcon />}
                            sx={{ textTransform: 'none' }}
                        >
                            Sign in with Apple
                        </Button>
                    </Box>

                    <Typography sx={loginStyle.linkText} variant="body2" align="center" mt={3}>
                       Don't Have an account?{' '}
                        <Link href="/" underline="hover" fontWeight="bold">
                            SignUp
                        </Link>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
