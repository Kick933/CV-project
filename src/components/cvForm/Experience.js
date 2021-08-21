import React from 'react'
import {Section, Input, Button, Head3} from '../styledComponents'

function Experience(props){
    return(
        <Section>
            <Head3>Experience</Head3>
            <Input placeholder="Position"></Input>
            <Input placeholder="Company"></Input>
            <Input placeholder="City"></Input>
            <Input placeholder="From"></Input>
            <Input placeholder="To"></Input>
            <Button>Delete</Button>
            <Button>Add</Button>
            </Section>
    )
}

export default Experience