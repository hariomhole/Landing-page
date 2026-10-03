import React from 'react'

const RightCard = (props) => {
    return (
        <>
        

            <div className='h-full w-55  relative  ml-5  shrink-0   overflow-hidden  rounded-4xl'>
                <img className='w-full h-full object-cover ' src={props.img} alt="" />
       
              
                <div className='absolute h-full w-full flex flex-col justify-around top-0 p-6 left-0'>

                    <h2 className=' rounded-full h-10 w-10 flex justify-center items-center text-2xl font-medium text-black bg-white'>{props.number}</h2>
                    <p className='text-white leading-relax mt-35 text-shadow-2xs'>{props.intro}</p>

                    <div className='flex justify-between'>
                        <button style={props.status === 'Satisfied' ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} className='text-lg leading-normal cursor-pointer text-white font-medium px-7 py-2 rounded-full mt-10'>{props.status}</button>
                        <button style={props.status === 'Satisfied' ? { backgroundColor: 'green' } : { backgroundColor: 'red' }} className='text-lg leading-normal bg-blue-600 text-white font-medium px-3 py-2 rounded-full mt-10'><i className="fa-solid fa-arrow-right"></i></button>
                    </div>


                </div>


            </div>





        </>
    )
}

export default RightCard
