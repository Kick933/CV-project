import React, {Component} from 'react'
import handleChange from './HandleChange'
import {Section, Head3, Input, Button} from '../styledComponents'


class ExperienceItem extends Component{
    constructor(props){
        super(props)
        this.state={
            company: this.props.data.company,
            position: this.props.data.position,
            to: this.props.data.to,
            from: this.props.data.from,
            city: this.props.data.city,
            identity: this.props.data.identity
        }
        this.handleChange = handleChange.bind(this)
    }


    render(){
        return(
            <Section>
                <Head3>Experience</Head3>
                <Input value={this.state.company} name="company" onChange={this.handleChange}></Input>
                <Input value={this.state.position} name="position" onChange={this.handleChange}></Input>
                <Input value={this.state.city} name="city" onChange={this.handleChange}></Input>
                <Input value={this.state.from} name="from" onChange={this.handleChange}></Input>
                <Input value={this.state.to} name="to" onChange={this.handleChange}></Input>
                <Button onClick={() =>this.props.saveExperience(this.state)}>Save</Button>
                <Button onClick={this.props.deleteExperience} id={this.state.identity}>Delete</Button>
            </Section>
        )
    }
}


export default ExperienceItem