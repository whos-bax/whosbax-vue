import React from 'react'
import { Container, Image } from 'react-bootstrap'

function Home() {
    
    return (
        <Container fluid>
            <Image src='/images/ableton.jfif' alt="ableton"
                style={{ margin: 'auto', width: '100%', opacity: '0.8', transition: '2s' }} />

        </Container>
    )
}

export default Home;