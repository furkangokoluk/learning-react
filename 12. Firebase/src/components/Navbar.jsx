import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../Firebase';

export default function Navbar() {
  
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth)
    navigate("/");
    toast.success("Çıkış Yapıldı")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='warning' position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , margin:'0px'}}>
            FireBase
          </Typography>
          <Button onClick={logout} color="inherit">Çıkış Yap</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
