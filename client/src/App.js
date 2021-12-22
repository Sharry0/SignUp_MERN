
import { useState } from "react"
import { Routes, Route, Redirect } from "react-router-dom"
//components
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./UserContext"

function App() {
  const [user, setUser] = useState(null)
  return (
    <div >
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
