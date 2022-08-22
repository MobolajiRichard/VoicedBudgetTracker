import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:#4e7dd4;
    font-size:15px;
    color:white;
    display:flex;
    justify-content:center;
`
function Announcement() {
  return (
    <Container>
        Flash sales going on now, Hurry, order now and get massive discounts!
    </Container>
  )
}

export default Announcement