import styled from 'styled-components'


const Container = styled.div`
height: 30px;
width: 100vw;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
`


const Announcement = () => {
  return (
    <Container>SUPER DEAL! Free Shipping for orders Over $50</Container>
  )}

export default Announcement