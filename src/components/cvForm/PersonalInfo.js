import React from 'react'
import {Section, Head3, Input, Description, Label, FileInput } from '../styledComponents'

function PersonalInfo(props){
    function newPhoto(e){
        e.preventDefault()
        const photo = new FileReader()
        const inputPhoto = document.getElementById('fileUpload')
        const file = inputPhoto.files[0]
        photo.onload = function(){
            props.updateImg(photo.result)
        }
        photo.readAsDataURL(file)
    }

    return (<Section>
            <Head3>Personal Information</Head3>
            <Input value={props.data.firstName} name="firstName" onChange={props.handleChange}></Input>
            <Input value={props.data.lastName} name="lastName" onChange={props.handleChange}></Input>
            <Input value={props.data.title} name="title" onChange={props.handleChange}></Input>
            <Label htmlFor="fileUpload">
                <legend>Choose Your Photo</legend>
                <FileInput name="fileUpload" id="fileUpload" type="file" onChange={newPhoto} >
                    </FileInput>
                    </Label>
            <Input value={props.data.address} onChange={props.handleChange} name="address"></Input>
            <Input value={props.data.phoneNumber} name="phoneNumber" onChange={props.handleChange}></Input>
            <Input type="email" value={props.data.email} name="email" onChange={props.handleChange}></Input>
            <Description  value={props.data.description} name="description" onChange={props.handleChange}></Description>
            </Section>
    )
}

export default PersonalInfo;