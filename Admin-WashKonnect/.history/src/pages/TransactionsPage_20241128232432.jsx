import React from 'react'

const TransactionsPage = () =>{

  const IsLoggedIn = false;
  const handleClick =() =>{ 
console.log('button was clicked')

  };

  return (
<div>
 
 { IsLoggedIn ? <h1> You are welcome</h1> : <h1>Please sign in</h1> }
 <button type="button" className='border-rounded border-solid border-red-700 text-red-700 w-[1rem] h-8'>CLICK ME!</button>

</div>


  )

} 
 export default TransactionsPage
