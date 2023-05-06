import React, { createContext, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './component/Navbar.jsx'
import Container from '@mui/material/Container'
import CreatePost from './pages/CreatePost.jsx'
import UpdatePost from './pages/UpdatePost.jsx'
import NotFound from './pages/NotFound.jsx'
export const AuthContext = createContext();

function App() {
  // const [count, setCount] = useState(0)
  const [refresh, setRefresh] = useState(false)
  const [auth, setAuth] = useState(null);
  return (
    <>
     <AuthContext.Provider value={{ auth, setAuth, refresh, setRefresh }}>
      <BrowserRouter>
        <Navbar />

        <Container sx={{ p: 1, mt: 10 }}>

          <Routes>
            {auth ?
              <>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreatePost />} />
                <Route path='/update/:id' element={<UpdatePost />} />
                <Route path='*' element={<NotFound/>}/>
              </>
              :
              <>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {!localStorage.getItem("token") && <Route path='*' element={<Login/>}/>}
              </>
            }
          </Routes>

        </Container>

      </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
}

export default App
