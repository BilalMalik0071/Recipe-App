import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Foodlist.css';



function Foodlist() {



    const [sdata, setData] = useState("")

    const [foods, setFoods] = useState([])

    const [copyFoods, setCopyFoods] = useState([])

    const fetchData = async () => {
        const result = await axios.get("https://dummyjson.com/recipes")
        setFoods(result.data.recipes);
        setCopyFoods(result.data.recipes)
    }

    useEffect(() => {
        fetchData()
    }, [sdata]
    )

    const search = () => {
        const data = foods.filter(i => (i.name + i.tags).toLowerCase().trim().includes(sdata.toLowerCase().trim()))
        setCopyFoods(data)
    }


    const getSortedMeal = (foodName) => {
        const result = foods.filter(i => i.mealType.join().toLowerCase().trim().includes(foodName.toLowerCase().trim()))
        setCopyFoods(result)
    }




    return (
        <div>

            <Container>
                <Row className='my-5'>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <img src="burger.gif" alt="" className='gif' />
                    </Col>

                    <Col lg={6}>
                        <div className='hero-div mt-5'>
                            <img style={{ width: "200px", height: "80px"}} src="https://i.postimg.cc/j5HhzM12/my-recipes-logo-png-transparent-my-recipes-logo-removebg-preview.png" alt="" />
                            <h1 className='hero-text'>From Kitchen Creations to Culinary Adventures</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='buttons-div mb-5 row-gap-4'>
                    <Col lg={6} className='ps-md-5' >
                        <div className='d-flex'>
                            <input onChange={(e) => setData(e.target.value)} type="text" name="" id="" placeholder='SearchFood' className='form-control' />
                            <button onClick={search} className='btn btn-dark ms-3'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-center'>
                        <div className='d-flex gap-2'>
                            <button onClick={() => getSortedMeal("Breakfast")} className='btn-outline-success btn'>Breakfast</button>
                            <button onClick={() => getSortedMeal("Lunch")} className='btn-outline-success btn'>Lunch</button>
                            <button onClick={() => getSortedMeal("Dinner")} className='btn-outline-success btn'>Dinner</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {foods.length > 0 ?
                <div className='d-flex flex-wrap justify-content-evenly container'>
                    {copyFoods.map(i => (
                        <Link to={`/Singleview/${i.id}`} className='link shadow-lg rounded-5'>
                            <Card style={{ width: '18rem', height: '100%' }} className=' border-0'>
                                <Card.Img variant="top" src={i.image} className='card-img' />
                                <Card.Body className='text-center'>
                                    <Card.Title>{i.name}</Card.Title>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <b>{i.cuisine}</b>
                                        <span>{i.mealType.join()}</span>
                                    </div>

                                    <div className='d-flex justify-content-between mt-2'>
                                        <div>
                                            <span>Rating <span className={i.rating > 4.5 ? "text-success" : "text-warning"} style={{ fontWeight: '700' }}>{i.rating}</span><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i> </span>
                                            <span>({i.reviewCount})</span>
                                        </div>
                                        <div>
                                            <span><span className={i.difficulty == "Easy" ? "text-success" : "text-warning"} style={{ fontWeight: '600' }}>{i.difficulty}</span></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
                :
                <div className='text-center'>
                    <img src="https://i.postimg.cc/wxCYWKm8/gif.gif" alt="" />
                </div>
            }
        </div>
    )
}

export default Foodlist
