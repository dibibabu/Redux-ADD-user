
import './App.css'; 
import {createStore} from "redux";
import {Provider} from "react-redux"
import useReducer from "./store/reducer/user"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Users from './pages/Users.js';
import Home from './pages/Home.js';

function App() {
  const store=createStore(useReducer);
  return (
    <Provider store={store }>
      <Router>
        <Routes>
          <Route path='/users' element={<Users/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>

    </Provider>
  );
}

export default App;
