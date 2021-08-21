import React from 'react'
import {Section, Head3, Input, Button,GreenButton} from '../styledComponents'

function Education(props) {
    if(props.education.length === 0){
        return(
            <Section>
            <Head3>Education</Head3>
            <Input placeholder="University Name"></Input>
            <Input placeholder="City"></Input>
            <Input placeholder="Degree"></Input>
            <Input placeholder="Subject"></Input>
            <Input placeholder="From"></Input>
            <Input placeholder="To"></Input>
            <GreenButton>Add</GreenButton>
            <Button>Delete</Button>
            </Section>
        )
    }else{
        return props.education.map((item,index) =>(
            <Section key={index}>
            <Head3>Education</Head3>
            <Input value={item.university} name="university"></Input>
            <Input value={item.city} name="city"></Input>
            <Input value={item.degree} name="degree"></Input>
            <Input value={item.subject} name="subject"></Input>
            <Input value={item.from} name="from"></Input>
            <Input value={item.to} name="to"></Input>
            <Button>Delete</Button>
            </Section>
        ))
    }
}

export default Education