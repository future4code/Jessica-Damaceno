import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { HomeScreen } from '../screens/homeScreen/homeScreen'
import { DetailsScreen } from '../screens/detailsScreen/detailsScreen'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/details/:id'>
                    <DetailsScreen/>
                </Route>
                <Route path='/'>
                    <HomeScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}