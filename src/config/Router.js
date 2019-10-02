import {createDrawerNavigator} from 'react-navigation-drawer'

import Home from "../view/Home";
import List from "../view/List";

export const Drawer = createDrawerNavigator({
    Home: Home,
    List: List
})