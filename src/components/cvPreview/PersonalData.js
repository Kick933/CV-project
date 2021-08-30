import React, {Component} from 'react'
import {H4, Img, Div, P} from '../styledComponents'


class PersonalData extends Component {
    constructor(props){
        super(props)
        this.state= this.props.data
    }

    render(){
        return(
            <Div>
            <Img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg" />
            <h3>Personal Details</h3>
            <H4>Address</H4>
            <P>{this.state.address}</P>
            <H4>Phone Number</H4>
            <P>{this.state.phoneNumber}</P>
            <H4>Email Address</H4>
            <P>{this.state.email}</P>

            </Div>
        )
    }
}


export default PersonalData