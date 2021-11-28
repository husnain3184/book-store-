import React from 'react';
import { Link } from 'react-router-dom'

const Navitem = (props) =>{
    return(
        <>
        <Link className="nav-link" to={props.url}>{props.name}</Link>
        </>
    )
}
export default Navitem;