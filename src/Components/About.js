import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MemoryGame from '../Static/Images/memory-game.png';
import HyfQuiz from '../Static/Images/hyf-quiz.png';
import QuotesApp from '../Static/Images/quotes-app.png';
import Jo from '../Static/Images/jo-about.jpg';
import Jo1 from '../Static/Images/jo-about4.jpg';
import Jo2 from '../Static/Images/jo-about7.jpg';
import Jo3 from '../Static/Images/jo-about5.jpg';
import Jo4 from '../Static/Images/jo-about6.jpg';
import Jo5 from '../Static/Images/jo-about3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';



class About extends Component {
    render() {
        return (
            <div className='aboutMe-container'>
                {/* <h1 className='name'> Johanna May Baguio </h1> */}
                <Header />
                <Carousel className='carousel-aboutme'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Milan, Italy</h3>
                            <p>Duomo di Milano, July,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Iceland</h3>
                            <p>Reykjavik, February,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Vatican City</h3>
                            <p>Saint Peter's Square, July,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Philippines</h3>
                            <p>Siargao, March,2018</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Philippines</h3>
                            <p>Cebu, May,2018</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3> Italy</h3>
                            <p>Venice, July,2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className='aboutMe-details'>
                    <p className='aboutMe-1 aboutMe-text'>
                        I’m a 28 year old web developer with a <i> Bachelor’s degree in Informations and Communications Technology </i>. I recently earned my post - graduate units in programming at <i> Hack Your Future  </i>where I was able to hone my skills in programming using HTML5, CSS, Sass, React, JavaScript, Node.js and MySQL. Throughout the entire program, I was able to create some applications/projects that helped me better the skills I have acquired in the entire program. You can  jump off and see the projects I've made
                        <NavLink to="/Projects" className='about-projects' activeClassName='current'> here</NavLink>. :)
                    </p>

                    <p className='aboutMe-2 aboutMe-text'>
                        Aside from navigating the cyber world, I also love exploring different places in the world. I love immersing myself in the diversities found in the country’s structures, history, and culture. In every place I’ve set my foot into, I made sure to take a piece of that place with me. These fragments of memories are collectively known as <b><i> my excess luggage </i></b>. Hop on and take a peek inside! ✈   </p>


                    <a href='https://johbaguio.github.io/hyf-christmas/' target='_blank' rel="noopener noreferrer" className='excess-luggage-a'><img src="https://s19.postimg.cc/ik3qv5ysz/HEADER.jpg" className='excess-luggage-pic' alt='Excess Luggage Banner' /></a>
                    <img src="https://s19.postimg.cc/haljqnx5v/sign.png" alt="Xoxo,Johanna" className="signature-aboutme" />
                </div>


                <Footer />
            </div>

        )
    }
}

export default About;
