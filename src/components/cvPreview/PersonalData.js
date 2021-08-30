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
            <Img src="https://michalosman.github.io/cv-application/static/media/example_photo.7a684f97.jpg" />
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