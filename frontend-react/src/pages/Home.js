import Layout from "../views/Layout";
import Slider from "react-slick";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Home = (props) => {
  const { object, carousel_items } = props;
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>

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
