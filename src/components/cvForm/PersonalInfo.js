import React from 'react'
import {Section, Head3, Input, Description } from '../styledComponents'

function PersonalInfo(props){
    return (<Section>
            <Head3>Personal Information</Head3>
            <Input value={props.data.firstName} name="firstName" onChange={props.handleChange}></Input>
            <Input value={props.data.lastName} name="lastName" onChange={props.handleChange}></Input>
            <Input value={props.data.title} name="title" onChange={props.handleChange}></Input>
           {/* <Label>Upload your recent photo.<Input type="file"></Input></Label>*/}
            <Input value={props.data.address} onChange={props.handleChange} name="address"></Input>
            <Input value={props.data.phoneNumber} name="phoneNumber" onChange={props.handleChange}></Input>
            <Input type="email" value={props.data.email} name="email" onChange={props.handleChange}></Input>
            <Description  value={props.data.description} name="description" onChange={props.handleChange}></Description>
            </Section>
    )
}

export default PersonalInfo;