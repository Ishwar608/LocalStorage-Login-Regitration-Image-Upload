import { Link, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

export const pages = [
    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Home</Link>, <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/regi'>Regitration</Link>, 
    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/login'>Login</Link>,
    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/uploadImg'>Upload Image</Link>
];
export const settings = ['Profile', 'Account', 'Dashboard',
   ];