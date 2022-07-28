import React from 'react'

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
        <div className='container mx-auto'>
            <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
                <h3 className='text-3xl font-semibold mb-8'
                    data-aos='fade-right'
                    data-aos-offset='800'
                    
                >Explore product in new way</h3>
                <p className='max-w-xs mb-12'
                   data-aos='fade-right'
                   data-aos-offset='900'
                   
                >Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Iusto, voluptatum.
                    </p>
                    {/* form */}
                    <form action="" 
                          className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
                          data-aos='fade-up'
                          data-aos-offset='200'
                          >
                        <input type="text" className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md' placeholder='Your email' />
                        <button className='btn'>Start</button>
                    </form>
            </div>
        </div>
    </section>
  )
}

export default Explore