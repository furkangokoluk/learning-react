import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../Firebase';

const provider = new GoogleAuthProvider();

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if(user){
        navigate("/home");
      }
    } catch (error) {
      toast.error("Giriş Yapılamadı" + error.message);
    }
  }

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı Oluşturuldu")
        setEmail('');
        setPassword('')
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const loginWithGoogle = async () => {
    try {
    const response = await signInWithPopup(auth, provider)
    const user = response.user;
    if (user) {
      navigate("/home");
    }
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent sx={{ padding: '0px' }}>
          <Typography gutterBottom variant="h5" component="div" display='flex' flexDirection='column' padding='20px'>
            <TextField type='emai' sx={{ width: '400px', marginBottom: '10px' }} id="filled-basic" label="E-mail" variant="outlined"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField type='password' sx={{ width: '400px' }} id="filled-basic" label="Şifre" variant="outlined"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant='contained' size="small" onClick={login}>Giriş Yap</Button>
          <Button variant='contained' size="small" onClick={register}>Kaydol</Button>
          <Button startIcon={<GoogleIcon />} variant='contained' size="small" onClick={loginWithGoogle}>Google İle Giriş Yap</Button>


        </CardActions>
      </Card>
    </Box>
  );
}
