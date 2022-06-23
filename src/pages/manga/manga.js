import React, {useEffect, useState} from 'react';
import './manga.css'
import {Button, Card, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import onepiece from '../../ressources/onepiece.jpg';
import snk from '../../ressources/snk.jpg';
import vl from '../../ressources/vl.jpg';

const Manga = () => {
    const [mangas, setMangas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/mangas')
            const jsonResult = await result.json()

            setMangas(jsonResult)
        }

        fetchData();
    }, [])

    const getMangas = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
    }
    return (
        <div>
            <div>
                <h2>Manga test api</h2>
                {mangas.map(manga =>
                    <Card style={{width: '18rem'}} className="m-4">
                        <Card.Img variant="top" src={onepiece}/>
                        <Card.Body>
                            <Card.Title>{manga.title}</Card.Title>
                            <Card.Text>
                                L'auteur est {manga.author} et l'éditeur est {manga.editor}
                            </Card.Text>
                            <LinkContainer to="/mangaDetail">
                                <Button variant="primary">Go somewhere</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                )}
            </div>
            <div className="p-4 row">
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={onepiece}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <LinkContainer to="/mangaDetail">
                            <Button variant="primary">Go somewhere</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={snk}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={vl}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Manga;
