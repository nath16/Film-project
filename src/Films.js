import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Films(props) {
    return (
    
        <div className='Film'>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Title: {props.Title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Released in: {props.Year}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> */}
            
            {/* <Card>
                <Card.Img variant="top" src={props.Poster} />
                <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                    imdb ID: {props.imdbID}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Released: {props.Year}</small>
                </Card.Footer>
            </Card>
            <br></br> */}


            <CardDeck>
            <Card>
                <Card.Img variant="top" src={props.Poster} />
                <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                    imdb ID: {props.imdbID}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Released: {props.Year}</small>
                </Card.Footer>
            </Card>
            
            <Card>
                <Card.Img variant="top" src={props.Poster} />
                <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                    imdb ID: {props.imdbID}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Released: {props.Year}</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={props.Poster} />
                <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                    imdb ID: {props.imdbID}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Released: {props.Year}</small>
                </Card.Footer>
            </Card>
            </CardDeck>
            <br></br>
        </div>
    );
}



export default Films;


