import React from 'react'
import { BoxRevealDemo } from './BoxReveal'
import Footer from '@/components/web/Footer'
import { Carousel } from 'react-responsive-carousel'
const Home = () => {
  return (<>
  <div className='flex justify-center items-center'><BoxRevealDemo/></div>
    <div className='w-full h-screen flex justify-center items-center text-xl pt-20'>
       

        <div className='h-[80vh] w-screen flex gap-10 items-center'>
           
          <div className='h-full w-full flex justify-between items-center p-8 '>
            <div>
            <h1 className='text-3xl font-bold mb-4'>Heyy!! Toys Unleash Creativity. Explore, Imagine, Enjoy!</h1>
            <p>These stores typically offer a wide range of products, including educational toys, dolls, action figures, board games, puzzles, and outdoor play equipment. Toy stores often aim to create a fun and engaging shopping experience, catering to both children and parents seeking entertainment, educational value, and developmental growth through play.</p>
            </div>
            </div>
            <div className="w-full h-[50vh] relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="overflow-hidden h-full"
          >
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1721895998Website_Banner.webp"
                alt="Toy 1"
              />
              <p className="legend">Lego Star Wars</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1721632783Web_banner_1817x747px_(2).webp"
                alt="Toy 2"
              />
              <p className="legend">Barbie Dreamhouse</p>
            </div>
            <div className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17216505861817x747_NGF.webp"
                alt="Toy 3"
              />
              <p className="legend">Hot Wheels Track</p>
            </div>
          </Carousel></div>
        </div>
      </div>
      <Footer/>
</>
  )
}

export default Home