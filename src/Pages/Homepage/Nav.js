import './nav.css'
import NavList from "./NavList"
import {Link} from "react-router-dom";
import React from "react";

const Nav = ({handleClickOpen,handleClose,open,setOpen}) => {

    const navLogo = 'https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png'

    return(
        <div className={'Nav'}>
            <div className={'NavItems'}>
                <img src={navLogo} alt={'navLogo'}/>
                <NavList
                    open={open}
                    setOpen={setOpen}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                />
            </div>
        </div>
    )
}

export default Nav