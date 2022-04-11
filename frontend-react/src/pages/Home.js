import React, { useState, useEffect } from "react"
import Layout from "../views/Layout";
import Slider from "react-slick";
import api from "../api";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Home = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { object, carousel_items } = props;

  useEffect(() => {
    api.currentUser()
    .then((user) => {
      setCurrentUser(user);
    })
  }, [])
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>
      {currentUser ? (
        <div>Привет, {currentUser.first_name}</div>
      ) : null}
      <div className="carousel">
        <Slider {...settings}>
          {carousel_items.map((item) => {
            return (
              <div key={item.id} className="carousel__item">
                <div>
                  <img className="d-block w-100" src={item.image} alt={item.title} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </Layout>
  )
}

export default Home
