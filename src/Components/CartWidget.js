import React from 'react';
import logo from './ImagenLimpieza.PNG';

const  CartWidget =() => {
    return <>
      <div className="row">
        <div className="logo">
       
          <img src={logo} width="50" height="50" alt='icon' style = {{marginRight:50}}></img>
         
        </div>
      </div>
      </>
    
  }

export default CartWidget;


