import React from 'react';
import styled from 'styled-components';

export default function Photo(props) {
    const { data } = props

    return (
        <div className='photo-container'>
            {}
            <StyledInfo>
            <div className='photo'>
                <img src={data.hdurl} alt='' />
            </div>
            <div className='info-container'>
               <h2>{data.title}</h2>
               <h4>Taken: {data.date}</h4>
               <div>
               <p>{data.explanation}</p> 
               </div>
            </div>
            </StyledInfo>
        </div>
    )
}

const StyledInfo= styled.div`
h2{
    display:flex;
    width:100%;
    justify-content: center;
    font-weight:bold;
    text-decoration:underline;
}
h4{
    display:flex;
    width:100%;
    justify-content:center;
}
p{
    padding:0 5%;
    font-weight:bold;
}
img{
    display:flex;
    width:90%;
    height:500px;
    padding:0 5%;
}
`