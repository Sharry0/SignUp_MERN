
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

const Signup = () => {
    const [username, handleUsername, resetUsername] = useInputState("")
    const [email, handleEmail, resetEmail] = useInputState("")
    const [pw, handlePw, resetPw] = useInputState("")
    const [confirmPw, handleConfirmPw, resetConfirmPw] = useInputState("")
    const [showPw, toggleShowPw] = useToggleState(false)

    return (
        <div>
            <div className="container my-5 col-10 col-sm-8 col-md-6 col-lg-5">
                <div className="text-center mb-5 alert alert-primary">
                    <label htmlFor="" className="h2">Registation</label>
                </div>
            {/* ______________Enter Username______________ */}
            <div className="form-group">
                    <TextField
                        size="small"
                        variant="outlined"
                        className="form-control"
                        label="Username"
                        value={username}
                        onChange={handleUsername}
                        sx={{ my: 1 }}
                    />
                </div>
            {/* ______________Enter e-mail______________ */}
                <div className="form-group">
                    <TextField
                        size="small"
                        variant="outlined"
                        className="form-control"
                        label="Email"
                        value={email}
                        onChange={handleEmail}
                        sx={{ my: 1 }}
                    />
                </div>
                {/* ______________Enter Password______________ */}
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
                {/* ______________Validate Password______________ */}

                {/* ______________Confirm Password______________ */}
                <div className="form-group">
                    <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPw ? 'text' : 'password'}
                            value={confirmPw}
                            onChange={handleConfirmPw}
                            label="Confirm Password"
                        />
                    </FormControl>
                </div>
                {/* ______________Submit Button______________ */}
                <div className="text-center mt-3">
                    <Button variant="contained" disabled={!username || !email || !pw || !confirmPw}>sign up</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
