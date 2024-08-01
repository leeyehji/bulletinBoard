import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <h1>헤더입니다.</h1>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/BoardList"}>BoardList</Link></li>
                    <li><Link to={"/BoardOne"}>BoardOne</Link></li>
                    <li><Link to={"/BoardWrite"}>BoardWrite</Link></li>
                    <li><Link to={"CustomEditor"}>Web Editor</Link></li>
                </ul>
                <hr/>
            </div>
        </div>
    );
};

export default Header;