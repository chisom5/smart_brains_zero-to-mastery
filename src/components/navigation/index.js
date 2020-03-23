import React from 'react'
import { Link } from 'react-router-dom';
import {Nav} from '../style';
import {withMyContext} from '../../context/context';

const Navigation =(props)=> {
  
    return (
        <Nav>
            <div>
            <p className='link' onClick={()=> props.myContextProps.handleLogout()}>Sign Out</p>
            </div>
        </Nav>
    )
}

export default withMyContext(Navigation);