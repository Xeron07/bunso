
import {CustomTextField} from "tag-input-field/index";
function App() {
const handleChange=(val)=>{
  console.log(val);
}
  return (
   <CustomTextField onChange={handleChange}/>
  );
}

export default App;
