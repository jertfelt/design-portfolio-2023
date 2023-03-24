import { Routes, Route, Navigate } from "react-router-dom";
import { useContext} from "react";
import Homepage from "@component/pages/Homepage/Homepage";
import Design from "@component/pages/Design/Design";
import Illustration from "@component/pages/Illustration/Illustration";
import Art from "@component/pages/Art/Art";
import NotFound from "@component/pages/NotFound";
import Frontend from "@component/pages/Frontend/Frontend";
import FeContext from "./Context/Frontend.Context";
import ArtContext from "./Context/Art.Context";
import IllContext from "./Context/Illustration.Context";
import DesignContext from "./Context/Design.Context";


const RoutePage = () => {
  const contextF = useContext(FeContext);
  const contextA = useContext(ArtContext);
  const contextI = useContext(IllContext);
  const contextD = useContext(DesignContext)
return(
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/design" element={!contextD.chosen ? <Homepage/>: <Design/>}/>
  <Route path="/illustration" element={!contextI.chosenIll ? <Homepage/> : <Illustration/>}/>
  <Route path="/art" element={!contextA.chosenArt ?<Homepage/> :<Art/> }/>
  <Route path="/frontend" element ={!contextF.chosenfe ? <Homepage/> : <Frontend/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>

)
}
export default RoutePage