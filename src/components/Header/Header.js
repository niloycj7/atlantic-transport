import React, { useContext } from 'react';
import logo from '../../Logo.png'
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {
    const textFieldStyle = {
        border: '1px solid #ccc',
        borderRadius: '4px'
    }
    const [loggedInUser, setLoggedInUser, signOutUser, setSignOutUser] = useContext(UserContext);
    return (
        <div>
            <nav>
                <img className="logo" src={logo} alt="" />
                <ul>
                    <li>
                        <TextField className="text-field" style={textFieldStyle} margin="normal"
                            placeholder="Search Your Destination"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (

                                    <InputAdornment >
                                        <SearchIcon style={{ color: 'white' }} />

                                    </InputAdornment>
                                )
                            }}
                        />
                    </li>
                    <li>

                        <a href="/home">Home</a>

                    </li>
                    <li>
                        <a href="/destination">Destination</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>



                    <Link to="/login">
                        {
                            loggedInUser.email ? <button className="login-button" onClick={() => signOutUser}>{loggedInUser.name}</button>
                                :
                                <button className="login-button">Login</button>
                        }
                    </Link>


                </ul>
            </nav>
        </div>
    );
};

export default Header;