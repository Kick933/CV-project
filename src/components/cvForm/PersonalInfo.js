import React from 'react'
import {Section, Head3, Input, Description } from '../styledComponents'

function PersonalInfo(props){
    return (<Section>
            <Head3>Personal Information</Head3>
            <Input placeholder="First Name" value={props.data.firstName} name="firstName" onChange={props.handleChange}></Input>
            <Input placeholder="Last Name" value={props.data.lastName} name="lastName" onChange={props.handleChange}></Input>
            <Input placeholder="Title" value={props.data.title} name="title" onChange={props.handleChange}></Input>
           {/* <Label>Upload your recent photo.<Input type="file"></Input></Label>*/}
            <Input placeholder="Address" value={props.data.address} onChange={props.handleChange} name="address"></Input>
            <Input placeholder="Phone Number" value={props.data.phoneNumber} name="phoneNumber" onChange={props.handleChange}></Input>
            <Input placeholder="Email" type="email" value={props.data.email} name="email" onChange={props.handleChange}></Input>
            <Description placeholder="Description" value={props.data.description} name="description" onChange={props.handleChange}></Description>
            </Section>
    )
}

export default PersonalInfo;