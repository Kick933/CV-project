import React, {Component} from 'react'
import {Section, Input, Button, Head3} from '../styledComponents'
import ExperienceItem from './ExperienceItem'
import { v4 as uuidv4} from 'uuid'
import handleChange from './HandleChange'

class Experience extends Component{
    constructor(props){
        super(props)
        this.state={
            position: "Position",
            company: "Company",
            city: "City",
            from: "From",
            to: "To"
        }
        this.baseState = this.state
        this.handleChange = handleChange.bind(this)
    }

    render(){
    return(
        <>
        {this.props.data.map(item => <ExperienceItem
        key={uuidv4()}
        data={item}>
        </ExperienceItem>)}
        <Section>
            <Head3>Add Experience</Head3>
            <Input onChange={this.handleChange} value={this.state.position} name="position"></Input>
            <Input onChange={this.handleChange} value={this.state.company} name="company"></Input>
            <Input onChange={this.handleChange} value={this.state.city} name="city"></Input>
            <Input onChange={this.handleChange} value={this.state.from}name="from"></Input>
            <Input onChange={this.handleChange} value={this.state.to} name="to"></Input>
            <Button>Delete</Button>
            <Button
            onClick={() => {this.props.addExperience(this.state)
            this.setState(this.baseState)}}>
                Add
                </Button>
            </Section>
            </>
    )
    }
}

export default Experience