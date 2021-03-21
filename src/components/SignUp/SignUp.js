import React from 'react';
import Header from '../Header/Header';
import { createStyles, Input, makeStyles, TextField } from '@material-ui/core';




const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            marginBottom: theme.spacing(2),
            width: 350
        },
    }),
);

const handleBtnStyles = {
    padding: '8px 50px',
    border: 'none',
    outline: 'none',
    borderRadius: '20px',
    marginBottom: '7px'
}
const SignUp = () => {
    const classes = useStyle();
    return (
        <div className="header">
            <Header />
            <div className="container m-auto text-center">
                <div className="row">
                    <div className="col-md-6 m-auto">
                    <form className="p-5 my-5 text-center bg-light  rounded">
                            <TextField className={classes.textField} id="standard-basic" type="email" placeholder="First Name" required />

                            <TextField className={classes.textField} id="standard-basic"
                                placeholder="Last Name" required />
                            <TextField type="email" className={classes.textField} id="standard-basic"
                                placeholder="Username or Email" required />
                                <TextField type="password" className={classes.textField} id="standard-basic"
                                    placeholder="Password" required />

                                <TextField type="password" className={classes.textField} id="standard-basic"
                                    placeholder="Confirm Password" required />
                                <button className='btn btn-warning w-75 mt-3' type="submit">Create Account</button>
                                <div className="mt-2">
                                    <small>Already have an account?</small>
                                    <a href="/login" className='text-warning '>Login</a>
                                </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;