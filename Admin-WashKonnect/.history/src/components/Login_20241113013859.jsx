import React, {useState} from 'react'

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authentication API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };
  
  return (

    <> 
    <div>
<div>
   washconnect
</div>

<div className=''> 

<form action="">
<input type="email" />

</form>


</div>

    </div>

    
  
    </>
  )
}

export default Login
