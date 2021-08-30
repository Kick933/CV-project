import React, {Component} from 'react'
import PersonalData from './PersonalData'
import { PrintWrapper, TopSection, Grid } from '../styledComponents'
import EducationAndExperience from './EducationAndExperience'


class PreviewPage extends Component{
    constructor(props){
        super(props)
        this.state = this.props.data
    }
    render(){
        return(
        <PrintWrapper>
            <TopSection>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <p>{this.state.title}</p>
            </TopSection>
        <Grid>
        <EducationAndExperience data={this.state} />
        <PersonalData data={this.state} />
        </Grid>
        </PrintWrapper>
        )
    }
}


export default PreviewPage