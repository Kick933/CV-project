import React from 'react'
import { FullWidth, H4, B} from '../styledComponents'
import { v4 as uuidv4} from 'uuid'

function EducationPreview(props){
        return(
            <>
            <H4>Education</H4>
            {props.data.map(item=>(
                <FullWidth key={uuidv4()}>
                    <B>{item.from} - {item.to}</B>
                    <div>
                    <B>{item.university}</B>
                    <p>Subject: {item.subject}</p>
                    <p>Degree: {item.degree}</p>
                    </div>
                </FullWidth>
            ))}
           </>
        )
    }



export default EducationPreview