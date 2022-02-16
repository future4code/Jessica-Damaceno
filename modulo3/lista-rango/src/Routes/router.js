import { BrowserRouter, Routes, Route } from "react-router-dom"
import {HomeScreen, DetailsScreen} from "../Screens/"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={    <HomeScreen/>}> 
            
                </Route>
              
                <Route path='/details/:id' element={<DetailsScreen/>}> 
                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}