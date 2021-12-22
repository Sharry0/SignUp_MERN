
import React, {useContext} from 'react'
// Hooks
import { UserContext } from '../UserContext';
import { useNavigate } from "react-router-dom";
import useInputState from '../hooks/useInputState'
import useToggleState from "../hooks/useToggleState"
// Components
import { toast } from 'react-toastify';
// MUI components 
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
// MUI Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// API Functions
import { login } from "../API/user";

const Login = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)
    // form states 
    const [email, handleEmail, resetEmail] = useInputState("")
    const [password, handlePw, resetPw] = useInputState("")
    const [showPw, toggleShowPw] = useToggleState(false)
    const handleLogin = async (evt) => {
        evt.preventDefault();
        try {
            const res = await login({  email, password })
            if (res.error) {
                toast.error(res.error, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // toast.error(res.error)
                // console.log(res.error)
            }
            else {
                toast.success(res.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setUser(res.username)
                // alert(res.message)
                //redirect the user to login
                navigate("/")
            }
        } catch (error) {
            toast.error(error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // alert(error)
        }
    }

    return (
        <div className="container my-5 col-10 col-sm-8 col-md-6 col-lg-5">
            <div className="text-center mb-5 alert alert-primary">
                <label htmlFor="" className="h2">Login</label>
            </div>
            <div className="form-group">
                <TextField
                    size="small"
                    variant="outlined"
                    className="form-control"
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div className="form-group">
                <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPw ? 'text' : 'password'}
                        value={password}
                        onChange={handlePw}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleShowPw}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPw ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </div>
            <div className="text-center mt-3">
                <Button 
                variant="contained" 
                disabled={!email || !password}
                onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login


