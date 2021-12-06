
import { Routes, Route, Redirect } from "react-router-dom"
//components
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Header from "./components/Header"

function App() {
  return (
    <div >
      <Header />
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
    </div>
  );
}

export default App;
