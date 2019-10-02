import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs'

import Home from "../view/Home";
import List from "../view/List";
import News from "../view/News";
import Api from "../view/Api";
import Portofolio from "../view/Portofolio";


export const Drawer = createDrawerNavigator(
    {
        Home: Home,
        List: List,
    }
);

export const TabBottomNavigation = createBottomTabNavigator(
    {
        Home: Home,
        News: News,
        List: Api,
        Portofolio: Portofolio,

    }
);

export const TabTopNavigation = createMaterialTopTabNavigator(
    {
        Home: Home,
        List: List,
    }
);