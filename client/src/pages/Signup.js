
import React from 'react'
// Hooks
import { useNavigate } from "react-router-dom";
import useInputState from '../hooks/useInputState';
import useToggleState from "../hooks/useToggleState";
// Compnents
import { toast } from 'react-toastify';

// MUI components 
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
// MUI Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
// API Functions
import { register } from "../API/user";

if (process.env.NODE_ENV !== "production") {
    // require("dotenv").config({ path: "./config/.env" })

};

const Signup = () => {
    const navigate = useNavigate();
    // form states 
    const [username, handleUsername, resetUsername] = useInputState("");
    const [email, handleEmail, resetEmail] = useInputState("");
    const [password, handlePw, resetPw] = useInputState("");
    const [confirmPw, handleConfirmPw, resetConfirmPw] = useInputState("");
    const [showPw, toggleShowPw] = useToggleState(false);

    //password validators
    const hasSixChar = password.length >= 6;
    const hasLowerChar = /(.*[a-z].*)/.test(password);
    const hasUpperChar = /(.*[A-Z].*)/.test(password);
    const hasNum = /(.*[0-9].*)/.test(password);
    const hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

    const handleRegister = async (evt) => {
        evt.preventDefault();
        try {
            const res = await register({ username, email, password })
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
                // alert(res.message)
                //redirect the user to login
                navigate("/login")
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
                {/* ______________Validate Password______________ */}
                {password &&
                    <div className="ms-3 mb-3" style={{ columns: 2 }}>
                        <div>
                            <small className={hasSixChar ? "text-success" : "text-danger"}>
                                {hasSixChar ?
                                    <CheckCircleIcon sx={{ mr: 1 }} />
                                    : <CancelIcon sx={{ mr: 1 }} />
                                }
                                at least 6 chaacters
                            </small>
                        </div>
                        <div>
                            <small className={hasLowerChar ? "text-success" : "text-danger"}>
                                {hasLowerChar ?
                                    <CheckCircleIcon sx={{ mr: 1 }} />
                                    : <CancelIcon sx={{ mr: 1 }} />
                                }
                                one lowercase letter
                            </small>
                        </div>
                        <div>
                            <small className={hasUpperChar ? "text-success" : "text-danger"}>
                                {hasUpperChar ?
                                    <CheckCircleIcon sx={{ mr: 1 }} />
                                    : <CancelIcon sx={{ mr: 1 }} />
                                }
                                one uppercase letter
                            </small>
                        </div>
                        <div>
                            <small className={hasNum ? "text-success" : "text-danger"}>
                                {hasNum ?
                                    <CheckCircleIcon sx={{ mr: 1 }} />
                                    : <CancelIcon sx={{ mr: 1 }} />
                                }
                                has one number
                            </small>
                        </div>
                        <div>
                            <small className={hasSpecialChar ? "text-success" : "text-danger"}>
                                {hasSpecialChar ?
                                    <CheckCircleIcon sx={{ mr: 1 }} />
                                    : <CancelIcon sx={{ mr: 1 }} />
                                }
                                has one Symbol
                            </small>
                        </div>
                    </div>
                }
                {/* ______________Confirm Password______________ */}
                <div className="form-group">
                    <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            type={showPw ? 'text' : 'password'}
                            value={confirmPw}
                            onChange={handleConfirmPw}
                            label="Confirm Password"
                        />
                    </FormControl>
                    {password && confirmPw && (
                        <FormHelperText>
                            {password === confirmPw ? <span className="text-success">Password matches</span>
                                : <span className="text-danger ms-3"> Password doesn't match</span>
                            }
                        </FormHelperText>
                    )}
                </div>
                {/* ______________Submit Button______________ */}
                <div className="text-center mt-3">
                    <Button
                        variant="contained"
                        disabled={
                            !username || !email || !password || !confirmPw ||
                            password !== confirmPw ||
                            !hasSixChar || !hasLowerChar || !hasUpperChar ||
                            !hasNum || !hasSpecialChar
                        }
                        onClick={
                            handleRegister
                        }
                    >
                        sign up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
