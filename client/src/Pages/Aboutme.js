import { Card, Col, Container, Row } from "react-bootstrap";

function Aboutme() {
    return (
        <Container className='mainContainer p-5'>
            <Row>
                <h1 id='Title'>
                    ABOUT ME
                </h1>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <Card style={{border: 'none'}}>
                        <Card.Title>
                            이름-
                        </Card.Title>
                        <Card.Subtitle>
                            
                        </Card.Subtitle>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    생년월일
                </Col>
                <Col xs={12} sm={6} md={4}>
                    연락처
                </Col>
                <Col xs={12} sm={6} md={4}>
                    이메일
                </Col>
                <Col xs={12} sm={6} md={4}>
                    학력
                </Col>
            </Row>
        </Container>
    )
}

export default Aboutme;