import React,{useState} from 'react'

const Home = () => {
  const [user, setUser] = useState({
    id:"",
    name:"",
    password:"",
  })

  const inputHandler=(event)=>{
    const [name,value]=event.target;
    setUser(()=>{
      
    })


  }
  return (
    <div>
      <h1>Add User</h1>
      <input name="id" placeholder="enter a id" onChange={} value={}/>
      <input name="name" placeholder="enter a name" onChange={} value={}/>
      <input name="password" type="password" placeholder="enter password" onChange={} value={}/>
      <button>Add user</button>
    </div>
  )
}

export default Home
