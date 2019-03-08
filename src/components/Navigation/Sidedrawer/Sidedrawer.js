import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Aux';

const sidedrawer = (props) => {
    let attachedCSSStyles= ['SideDrawer', 'Close'];
    if (props.open) {
        attachedCSSStyles= ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedCSSStyles.join(' ')}>
            <Logo height='10%' width='auto' margin-bottom='32px'/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )
};

export default sidedrawer;