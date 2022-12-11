import React from 'react'
import classes from './header.module.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineWechat, AiOutlineMail, AiOutlinePhone, AiOutlineInstagram} from "react-icons/ai";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.header_title}>Cleopatra Therm</div>
            <div>
                <ul>
                    <li><FaFacebookF />  </li>
                    <li><FaTwitter />    </li>
                    <li><AiOutlineInstagram />  </li>
                    <li><FaFacebookF />  </li>
                </ul>
            </div>

        </div>
    )
}

export default Header