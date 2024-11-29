import React from 'react'

function TransactionsPage () {

  const IsLoggedIn = true;

  if (IsLoggedIn) { return 
    <div>
      <h1>Youre welcome </h1>
    </div>}
  
  else { return
    
    <h1>Please sign in</h1>
  
}

}
export default TransactionsPage
