import React from 'react'
import SearchBar from '../common/searchBar/SearchBar';

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <SearchBar className='mx-4 md:mx-10 mt-10' placeHolder='e.g., tomato, garlic, pepper'/>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What should I cook?
          </h1>
          <div className="mb-8 leading-relaxed">
            <p>Are you feeling bored to cook same things everyday?</p>
            <p>Do you want to clear off the ingredients in your fridge?</p>
            <p>Have no ideas what to do for starting your cooking?</p>
            <p className='font-bold'>Simply type the ingrident you have and explore the recipes!</p>
          </div>
          <div className="flex justify-center">
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*" />
        </div>
      </div>
    </section>
  )
}

export default Hero;