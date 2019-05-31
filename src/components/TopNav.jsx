import React from 'react';
import {Link} from "react-router-dom";

const TopNav = (props) => {
    return (
        <li>
            <Link to ='/'> Home </Link>
            <Link to ='/Tasker'>Tasker  </Link>
            <Link to ='/Task'>Task  </Link>
        </li>
    );
}

export default TopNav;

