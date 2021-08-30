import React from 'react'
import { B, FullWidth, H4 } from '../styledComponents'
import { v4 as uuidv4} from 'uuid'

function ExperiencePreview(props){
        return(
            <>
            <H4>Experience</H4>
            {props.data.map(item => (
                <FullWidth key={uuidv4()}>
                <B>{item.from} - {item.to}</B>
                <div>
                    <B>{item.position}</B>
                    <p>{item.company},{item.city}</p>
                </div>
                </FullWidth>
            ))}
            </>
        )
    }

export default ExperiencePreview