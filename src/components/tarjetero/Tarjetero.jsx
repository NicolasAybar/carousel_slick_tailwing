//import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data=[
  {
    image:'src/components/img/1.jpg',
    title:'Iphone 5G Phone',
    price:500
  },
  {
    image:'src/components/img/2.jpg',
    title:'Samsung 5G Phone',
    price:60.10
  },
  {
    image:'src/components/img/3.jpg',
    title:'Intel 5G Phone',
    price:5040.87
  },
  {
    image:'src/components/img/4.jpg',
    title:'Poco 5G Phone',
    price:50.87
  },
  {
    image:'src/components/img/5.jpg',
    title:'Techno 5G Phone',
    price:50.83
  }
]
function Tarjetero() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='w-full bg-slate-600 pt-10'>

      <div className='w-3/4 m-auto pb-10 '>
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return(
              <div key={index} className='bg-white'>
                <div>
                  <img src={item.image} className='w-60 h-60 object-contain block m-auto '/>
                </div>

                <div className='p-6 bg-blue-600'>
                  <p className='font-semibold text-white text-center'>{item.title}</p>
                </div>
                <div>
                  <p className='font-semibold text-center forced-color hover:text-yellow-600'>$ {item.price}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
      </div>
    </div>
  )
}

export default Tarjetero
