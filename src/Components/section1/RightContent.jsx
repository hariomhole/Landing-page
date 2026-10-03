import React from 'react'
import RightCard from './RightCard'


const customers = [
  {
    number: 1,
    intro: "Interested in our premium services and ready to purchase.",
    status: "Satisfied",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PSWprmuTsOj2ZmhiTD9b_3HYD3zjXkHP7iYlfLvspV-sUeqlR8zESdQ&s=10",
  },
  {
    number: 2,
    intro: "Interested but unhappy with the current pricing.",
    status: "Unsatisfied",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyc370URAFU9ywshJHmj-RMNOhboJ18S2gWpMcyTgLlxGNePTI8LbKoY&s=10",
  },
  {
    number: 3,
    intro: "Happy with the product features and customer support.",
    status: "Satisfied",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAjYsap8-xrOHDUnDo4VdoLwxEgrhqa1Wr6GEgld0Ow&s=10",
  },
  {
    number: 4,
    intro: "Needs better support before making a purchase.",
    status: "Unsatisfied",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObPXrzSKl3OJsbx8Ly1xVxhXL3LPaxmyVQVM8EE8lbw&s=10",
  },
  {
    number: 5,
    intro: "Satisfied with the demo and interested in subscribing.",
    status: "Satisfied",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMsnmoaggNdtHxBlvHiU2AoQTArFp6Nkut-CoyhMC9Q&s=10",
  },
  {
    number: 6,
    intro: "Concerned about product quality and delivery time.",
    status: "Unsatisfied",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSccs80AVHpG__d_L5sgmTMf1NpuoFJjvYbHQV3JSsrA&s=10",
  },
];



const RightContent = () => {
  return (
    <div id="right-content" className='h-full flex ml-2  py-4 w-2/3 bg-gray-300 rounded-2xl flex-nowrap  overflow-x-auto'>
   

   {customers.map(function(ele,indx){
     
      return  <RightCard  key={indx} img={ele.img} intro={ele.intro} status={ele.status} number={ele.number}/>
   })}
    </div>
  )
}

export default RightContent
