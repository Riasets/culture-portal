import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Biography = () => {
    return (
        <div>
            <div className='writer-image'
                style={{
                    margin: `0 auto`,

                }}>
                <img src={urlToImage} alt={Title}/>
            </div>
            <div className='writer-info'>
                <h1 className='name'>{name}</h1>
                <h3 className='years'>{lifeTime}</h3>
            </div>
            <div className='biography'>
                HAHAHA
            </div>
        </div>
    )    
}

export default Biography