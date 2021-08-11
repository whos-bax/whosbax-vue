import React, { useEffect } from 'react'
import { Container, Image, Row } from 'react-bootstrap'

function Home() {
    const imgurl = '/images/ableton.jfif'

    useEffect(() => {
        setTimeout(function () {
            document.getElementById('titleHello').style.visibility = 'visible'
            document.getElementById('titleHello').style.opacity = '1'
        }, 1000)
    }, [])

    return (
        <Container className='mainContainer' fluid>
            <Row className='d-block'>
                <p id='titleHello'>
                    ALWAYS NEW AND NEXT
                </p>
                <Image src={imgurl} alt="ableton" className='abletonHome' />
            </Row>

        </Container>
    )
}

export default Home;