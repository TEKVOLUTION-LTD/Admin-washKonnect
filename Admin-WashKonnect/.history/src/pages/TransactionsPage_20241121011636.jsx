import React from 'react'

function TransactionsPage () {

  const IsLoggedIn = true;

  if (IsLoggedIn) { return 
    
      <h1>Youre welcome </h1>
  }
  
  else { return
    
    <h1>Please sign in</h1>
  
}

}
export default TransactionsPage
