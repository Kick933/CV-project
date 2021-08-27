import React, {Component} from 'react'
import { Section, Input, Head3, Button  } from '../styledComponents'
// import { v4 as uuidv4} from 'uuid'
import handleChange from './HandleChange'

class EducationItem extends Component{
    constructor(props){
        super(props)
        this.state={
            university: props.data.university,
            city: props.data.city,
            degree: props.data.degree,
            from: props.data.from,
            to: props.data.to,
            subject: props.data.subject,
            identity: props.data.identity
        }
        this.handleChange= handleChange.bind(this)
    }

    render(){
        return(
            <>
                <Section>
                <Head3>Education</Head3>
                <Input value={this.state.university} onChange={this.handleChange} name="university"></Input>
                <Input value={this.state.city} onChange={this.handleChange} name="city"></Input>
                <Input value={this.state.degree} onChange={this.handleChange} name="degree"></Input>
                <Input value={this.state.subject} onChange={this.handleChange} name="subject"></Input>
                <Input value={this.state.from} onChange={this.handleChange} name="from"></Input>
                <Input value={this.state.to} onChange={this.handleChange} name="to"></Input>
                <Button onClick={() =>this.props.saveEducation(this.state)}>Save</Button>
                <Button onClick={this.props.deleteEducation} id={this.state.identity}name='delete'>Delete</Button>
                </Section>
            </>
        )}
}

export default EducationItem