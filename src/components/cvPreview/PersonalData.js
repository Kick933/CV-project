import React, { useState, useEffect} from 'react'
import {H4, Img, Div, P} from '../styledComponents'

function PersonalData(props){
    const [ state, setState ] = useState({})

    useEffect(() => {
        setState(props.data)
    },[props.data])

    return(
        <Div>
        <Img src={state.img} />
        <h3>Personal Details</h3>
        <H4>Address</H4>
        <P>{state.address}</P>
        <H4>Phone Number</H4>
        <P>{state.phoneNumber}</P>
        <H4>Email Address</H4>
        <P>{state.email}</P>
        </Div>
    )
}


export default PersonalData