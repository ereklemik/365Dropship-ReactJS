import {Button} from "@material-ui/core";
import './login.css'
import Daialog from './Dialog'
import React, {useEffect} from "react";
import NavList from "./NavList";
const Login = ({handleClickOpen,handleClose,open}) => {

    const styled = {
        color : '#fff',
        background: '#61D5DF',
    }

    console.log(open)

    return (
        <div className={'LoginButton'}>
            <Button variant="outlined" style={styled}  onClick={handleClickOpen}>
                SING UP NOW
            </Button>
        </div>
    )
}

export default Login