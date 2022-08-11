import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/';
import Card from 'react-bootstrap/Card';import './Home.css';

const Home = () => {
    return (
      <div className='container'>
        <div className='carousel'>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100  img-fluid rounded"
              src="https://images.pexels.com/photos/6995018/pexels-photo-6995018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              
              src="https://www.sos-childrensvillages.org/getmedia/f29f8f80-83ae-4aae-bf5a-4a96fc52c50d/tpa_picture_30483_Bangladesh1.jpg?ext=.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/6646920/pexels-photo-6646920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
      <br />
      <br />

    <div>
    <Card className="bg-dark text-white ">
      <Card.Img src="https://images.pexels.com/photos/8060425/pexels-photo-8060425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text className='text-justify'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae eos laboriosam quos sed non ad quidem id, natus molestias culpa exercitationem necessitatibus libero blanditiis vero pariatur. Deleniti cum quo minima, nemo culpa veritatis maxime, iusto quae iure architecto cumque, quidem laboriosam porro tenetur voluptatum ipsum repudiandae facilis quod illo neque corporis? Voluptatum molestiae minus suscipit maxime nesciunt repellendus laudantium officia perferendis iusto obcaecati quas necessitatibus modi, odio, neque dolorum ducimus est doloremque praesentium velit aspernatur deserunt distinctio magnam fugit aliquid! Officia eveniet iste ipsa! Nostrum odio eos culpa tempore, officiis repudiandae quisquam facilis ipsam! Quisquam dicta exercitationem iusto dignissimos. Aspernatur dignissimos earum accusantium sed consectetur cupiditate quod sunt quis molestiae explicabo, voluptatem odio maiores id aperiam facilis, tempora voluptatum praesentium atque quo sequi quaerat aut? Voluptates vero nam nesciunt? Reprehenderit, voluptate molestiae corporis nesciunt magni rerum quam molestias amet ab eum, aliquam fugit unde. Hic ab libero, dicta adipisci, iusto odio esse sunt, laudantium nostrum nihil maxime. Aperiam porro recusandae enim similique ullam maiores adipisci exercitationem? Quibusdam deleniti pariatur eius doloremque est quidem veritatis, odit aliquam obcaecati accusantium optio quos iusto et officia tenetur fuga! Porro voluptatibus molestiae adipisci odit non, voluptatem saepe ducimus velit quis blanditiis rem! Doloribus.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
      </div>
        
    );
};

export default Home;