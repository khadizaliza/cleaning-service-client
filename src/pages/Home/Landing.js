import React from 'react';
import bucketGirl from '../../image/bucket-girl.jpg'

const Landing = () => {
    return (
        <div className='relative'>
        <div class="hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          
          <div>
              <p className='text-xl'>Best Quality!</p>
            <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
            <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className='h-[60vh] shrink-0'>
          <img src={bucketGirl} alt="" class="h-full" />
          </div>
        </div>
      </div>
      <div className='rounded-2xl mt-[-20px] mx-auto relative bg-base-200 z-20 shadow-lg p-10 w-5/6'>
          <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </div>
          <button className='btn btn-primary mt-5'>Get a Quote</button>
      </div>
      </div>
    );
};

export default Landing;