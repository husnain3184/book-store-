import Navitem from './Navitem';
import React from 'react';

const Navmenu = (props) =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Book</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {props.menuLiks.map ((items,key) => {
                 return (
                  <li className="nav-item" id={key} key={key}>
                  <Navitem  name={items.name} url={items.slug}/>
                  </li>
              )
              })}
    </ul>
  </div>
</nav>
        </>
    )
}
export default Navmenu;