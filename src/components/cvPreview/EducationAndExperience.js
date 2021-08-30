import React from 'react'
import ExperiencePreview from './ExperiencePreview'
import EducationPreview from './EducationPreview'
import { DivLeft } from '../styledComponents'

function EducationAndExperience(props){
    return(
        <DivLeft>
        <EducationPreview data={props.data.education} />
        <ExperiencePreview data={props.data.experience} />
        </DivLeft>
    )
    }


export default EducationAndExperience