import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import PastImersions from './pages/PastImersions';
import PresentImersions from './pages/PresentImersions';
import Content from './pages/Content';
import Chatbot from './pages/Chatbot';

const LoginNavigator = createSwitchNavigator({
    Login,
    Home
});

const MainContentNavigator = createStackNavigator({
    Home,
    PastImersions,
    PresentImersions,
    Content,
    Chatbot
});

const AppNavigator = createSwitchNavigator({
    LoginNavigator,
    MainContentNavigator
});

export default createAppContainer(AppNavigator);