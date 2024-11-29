import React from 'react'

const TransactionsPage = () =>{

  const IsLoggedIn = false;
  const handleClick =() =>{ 
console.log('button was clicked')

  };

  return (
<div>
 
 { IsLoggedIn ? <h1> You are welcome</h1> : <h1>Please sign in</h1> }

</div>


  )

} 
 export default TransactionsPage
