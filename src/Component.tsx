import React, { useState } from 'react'
import styled from "styled-Components"

const Container=styled.div`
width:80%;
height:200px;
background-color: brown;
`
const Component:React.FC = () => {
    const[count,setCount]=useState(0)
    const onclick=()=>{
setCount(count+1);
    }
  return (
    <Container className='container'>
      <h1>This is Component from MFE1 Shared module 1</h1>
      <button onClick={onclick}> Chick Me First</button>
      {count}
    </Container>
  )
}

export default Component;
