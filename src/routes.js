import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import PastImersions from './pages/PastImersions';
import PresentImersions from './pages/PresentImersions';
import Content from './pages/Content';
import Chatbot from './pages/Chatbot';
import Agenda from './pages/Agenda';

const MainContentNavigator = createStackNavigator({
    Login,
    Home,
    PastImersions,
    PresentImersions,
    Agenda,
    Content,
    Chatbot
});


export default createAppContainer(MainContentNavigator);