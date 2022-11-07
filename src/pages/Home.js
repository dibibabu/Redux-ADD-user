import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import * as userActions from "../store/action/user"

const Home = () => {
  const [user, setUser] = useState({
    id:"",
    name:"",
    password:"",
  })

  const inputHandler=(event)=>{
    const {name,value}=event.target;
    console.log(name,value)
    setUser((prevItems)=>{
      return{
        ...prevItems,
        [name]:value,
      };

    });


  }
  const dispatch=useDispatch()

  const addUser=()=>{
    dispatch(userActions.addUser(user))
    setUser({
      id:"",
      name:"",
      password:"",
    })

  }
  return (
    <div>
      <h1>Add User</h1>
      <input name="id" 
      placeholder="enter a id" 
      onChange={inputHandler}
       value={user.id}/>
      <input name="name" placeholder="enter a name" onChange={inputHandler} value={user.name}/>
      <input name="password" type="password" placeholder="enter password" onChange={inputHandler} value={user.password}/>
      <button type='submit' onClick={addUser}>Add user</button>
     <Link to="/users">Users list</Link>
    </div>
  )
}

export default Home
