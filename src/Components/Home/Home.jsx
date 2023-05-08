import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import HashLoader from "react-spinners/ClipLoader";


const Home = () => {
    const [chef, setChef] = useState([]);
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        setSpinner(true)
        fetch('https://chefa.onrender.com/')
            .then(res => res.json())
            .then(data => {
                setChef(data);
                setSpinner(false)
            });
    }, [])
    return (
        <div>
            {
                spinner ? <div className="spinner">
                    <HashLoader size={60} color="#36d7b7" />
                </div> : <div>
                    <div>
                        <Carousel pause="false">
                            <Carousel.Item interval={3000}>
                                <img style={{ height: '80vh' }}
                                    className="d-block w-100"
                                    src="https://i.ibb.co/x7SxYjH/product13-570x300.jpg"
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <h3>Seafood Spaghetti</h3>
                                    <p>This lobster tail recipe is a decadent dinner made with large lobster</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img style={{ height: '80vh' }}
                                    className="d-block w-100"
                                    src="https://i.ibb.co/fNpdMp3/product12-570x300.jpg"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Mutton Korma</h3>
                                    <p>Mutton Korma is a delectable mutton preparation</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: '80vh' }}
                                    className="d-block w-100"
                                    src="https://i.ibb.co/y6wBy0w/product11-570x300.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Chicken grill</h3>
                                    <p>
                                        Grilled Chicken is a very popular recipe
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="card-cont">
                        {
                            chef.map((u, i) => (
                                <div key={i} className="card-div">
                                    <div className="card-user">
                                        <Card className="card--img">
                                            <Card.Img variant="top" src={u.chef.img} />
                                            <Card.Body>
                                                <Card.Title style={{ textAlign: 'center' }}>{u.chef.name}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item>Experience: {u.chef.experience} Years</ListGroup.Item>
                                                <ListGroup.Item>Number Of recipes : {u.chef.numberOf_recipes}</ListGroup.Item>
                                                <ListGroup.Item>Total Like : {u.chef.Likes}👍</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Link className="all-recipy" state={{ u }} to='recipy'>All Recipes ⇒</Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div >
    );
};

export default Home;