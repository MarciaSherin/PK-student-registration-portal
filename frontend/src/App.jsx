import { Basic, Dashboard } from "./PAGES/Basic";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import './index.css'; 


function App() {
 

  return (
    <div><BrowserRouter>
  <Routes>
    <Route path="/" element={<Basic />}/>
    
    
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
