import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    background-color: teal;
    color:white;
    height: 30px;
    display: flex;
    align-items:center;
    justify-content:center;
    font-weight:500;
    font-size: 14px;
`

const Announcements = () => {
  return (
    <Container>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </Container>
  )
}

export default Announcements