
import "./App.css";
import CustomTextField from "./page/CustomizeTextField";
function App() {
const handleChange=(val)=>{
  console.log(val);
}
  return (
   <CustomTextField onChange={handleChange}/>
  );
}

export default App;
