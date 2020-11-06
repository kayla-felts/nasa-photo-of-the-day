import React from 'react';

export default function Photo(props) {
    const { data } = props

    return (
        <div className='photo-container'>
            {}
            <div className='photo'>
                <img src={data.hdurl} alt='' />
            </div>
            <div className='info-container'>
               <h2>Title: {data.title}</h2>
               <h4>Date: {data.date}</h4>
               <div>
               <p>{data.explanation}</p> 
               </div>
            </div>
        </div>
    )
}
