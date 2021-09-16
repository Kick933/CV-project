import React, {Component} from 'react'
import {Section, Head3, Input, Button} from '../styledComponents'
import EducationItem from './EducationItem'
import handleChange from './HandleChange'
import {v4 as uuidv4} from 'uuid'

class Education extends Component{
    constructor(props){
        super(props)
        this.state={
            university:"University",
            city:"City",
            to:"To",
            from:"From",
            subject:"Subject",
            degree:"Degree"
        }
        this.baseState = this.state
        this.handleChange = handleChange.bind(this)
    }
    resetState= ()=>{
        this.setState(this.baseState)
    }
    render(){
        return(
            <React.Fragment>
            <Section>
            <Head3>Add Education</Head3>
            <Input name="university" onChange={this.handleChange} value={this.state.university}></Input>
            <Input name="city" onChange={this.handleChange} value={this.state.city}></Input>
            <Input name="degree" onChange={this.handleChange} value={this.state.degree}></Input>
            <Input name="subject" onChange={this.handleChange} value={this.state.subject}></Input>
            <Input name="from" onChange={this.handleChange} value={this.state.from}></Input>
            <Input name="to" onChange={this.handleChange} value={this.state.to}></Input>
            <Button name="add" 
            onClick={() => {
                this.props.addEducation(this.state)
                this.resetState()
            }}>
                Add
                </Button>
            </Section>
                {this.props.data.map(item => {
                    return(
                    <EducationItem
                    key={uuidv4()} 
                    data={item}
                    saveEducation={this.props.saveEducation}
                    deleteEducation={this.props.deleteEducation}>
                    </EducationItem>
                    )
    })}
            </React.Fragment>
        )
    }
}

export default Education