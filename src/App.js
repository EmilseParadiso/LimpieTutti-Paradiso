 './App.css';
import { render } from "@testing-library/react";
import NavBar from "./Components/NavBar";
import Greeting from "./Components/ItemListContainer"; 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  render()
  return (
    <div className="App">
    <NavBar/>
    <Greeting greeting= "Te ayudamos a conseguir todos los productos de limpieza que necesitas! "/>
    </div>
    
    
  );
} 

export default App;