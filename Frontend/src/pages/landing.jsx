// import React from 'react'

const LandingPage = () => {
  return (
    <div className="flex bg-gray-900">
      <header>
        
      </header>
      <section className="">
        <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
              Build and scale up your startup with the best tools
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            
            
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default LandingPage;
