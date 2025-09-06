import { Box, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListTable from '../../components/listTable';
import { handleLogout } from '../../redux/authSlice';
import { dashboardStyle } from './style';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const filteredPosts = posts?.filter((post: { title: string }) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
    );

    const logout = () => {
        dispatch(handleLogout());
        navigate('/login');
    };

    return (
        <Container sx={dashboardStyle.rootsx}>
            <Box sx={dashboardStyle.dashBoardHeadSx}>
                <Box sx={{...dashboardStyle.dashBoardHeadSx,gap:2}}>
                    <Typography sx={dashboardStyle.head} variant="h4" gutterBottom>Dashboard</Typography>
                    <TextField
                        label="Filter by title"
                        size='small'
                        margin="normal"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    />
                </Box>
                <IconButton aria-label="log-out" size="large" onClick={logout}>
                    <LogoutIcon sx={{color:'#fff'}}/>
                </IconButton>
            </Box>

            <div style={{ height: 420, width: '100%', overflowY: "auto" }}>
                <ListTable posts={filteredPosts} />
            </div>
        </Container>
    );
}
