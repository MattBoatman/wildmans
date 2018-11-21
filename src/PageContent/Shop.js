import React from 'react';
import {spices} from '../fakeData';
import ItemCard from './ItemCard'
import ItemDialog from './ItemDialog'
import { withRouter } from "react-router";

const Shop = (props) => {
    return (
        <div style={{
            margin: "0 auto",
            padding: "64px 0 48px",
            display: 'flex',
            justifyContent: 'space-around'
        }}>
        {spices.map((spice, idx) => <ItemCard {...spice} key={idx}/>)}
        {props.match.path === '/shop/:name' && <ItemDialog spice={spices.find(spice => spice.url === props.match.params.name)}/>}
        </div>
    );
};

export default withRouter(Shop);