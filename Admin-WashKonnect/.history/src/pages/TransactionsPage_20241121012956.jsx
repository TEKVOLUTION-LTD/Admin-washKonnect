import React from 'react'

const TransactionsPage = () =>{

  const IsLoggedIn = true;

  return (
<div>
 
 { IsLoggedIn ? <h1> You are welcome</h1> : <h1>Please sign in</h1> }

</div>

  )

}
export default TransactionsPage
