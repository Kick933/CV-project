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
            city: this.props.data.city
        }
        this.handleChange = handleChange.bind(this)
    }


    render(){
        return(
            <Section>
                <Head3>Experience</Head3>
                <Input value={this.state.company} name="company" handleChange={this.handleChange}></Input>
                <Input value={this.state.position} name="position" handleChange={this.handleChange}></Input>
                <Input value={this.state.city} name="city" handleChange={this.handleChange}></Input>
                <Input value={this.state.from} name="from" handleChange={this.handleChange}></Input>
                <Input value={this.state.to} name="to" handleChange={this.handleChange}></Input>
                <Button>Save</Button>
                <Button>Delete</Button>
            </Section>
        )
    }
}


export default ExperienceItem