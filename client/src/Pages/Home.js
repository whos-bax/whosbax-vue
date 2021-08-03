import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'

function Home() {
    const imgurl = '/images/ableton.jfif'
    return (
        <Container className='homecontainer' fluid>
            <Row className='d-block'>
                <p>
                    ALWAYS NEW AND NEXT
                </p>
                <Image src={imgurl} alt="ableton" className='abletonHome' />
            </Row>
            
        </Container>
    )
}

export default Home;