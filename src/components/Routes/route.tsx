import { createBrowserRouter} from "react-router"
import { Home } from "../../pages/home"


const Routes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
 
])

export default Routes