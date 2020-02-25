import React from "react"
import Biography from "../WriterPage/elements/WriterBiography"
import Writer from "Writers"


function WriterPage(props) {
    return (
        <div>
            <div className='writer-image'>
                <img src={props.Picture} alt={props.name}/>
            </div>
            <div className='writer-info'>
                <h1 className='name'>{props.name}</h1>
                <h3 className='years'>{props.lifeTime}</h3>
            </div>
            <div className='biography'>
                {props.ShortInfo}
            </div>
        </div>
    )
}