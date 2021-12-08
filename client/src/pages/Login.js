
import React from 'react'
// Hooks
import useInputState from '../hooks/useInputState'
import useToggleState from "../hooks/useToggleState"
// MUI components 
import  TextField  from '@mui/material/TextField';
import  InputAdornment  from '@mui/material/InputAdornment';
import  IconButton  from '@mui/material/IconButton';
import  OutlinedInput  from '@mui/material/OutlinedInput';
import  FormControl  from '@mui/material/FormControl';
import  InputLabel  from '@mui/material/InputLabel';
import  Button  from '@mui/material/Button';

// MUI Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [email, handleEmail, resetEmail] = useInputState("")
    const [pw, handlePw, resetPw] = useInputState("")
    const [showPw, toggleShowPw] = useToggleState(false)

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
                        value={pw}
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
                <Button variant="contained" disabled={!email || !pw}>Login</Button>
            </div>
        </div>
    )
}

export default Login



{/* <form className="col-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}