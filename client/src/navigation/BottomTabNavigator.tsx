import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import CompletedScreen from '../screens/CompletedScreen';
import TodayScreen from "../screens/TodayScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import HomeStackNavigator from "./HomeStackNavigator";
import Icons from "../components/shared/Icons";
import { useTheme } from "@shopify/restyle";
const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
    const theme = useTheme()
    
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:"black",
            tabBarInactiveTintColor:theme.colors.gray500,
            tabBarHideOnKeyboard:true,
        }}>
            <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={()=>({
                title:"Home",
                tabBarIcon: ({color}) => <Icons name="home" color={color}/>,
                headerShown:false,
            })}></Tab.Screen>
            <Tab.Screen name="Completed" component={CompletedScreen}  options={()=>({
                title:"Completed",
                tabBarIcon: ({color}) => <Icons name="completed" color={color}/>,
                headerShown:false,
            })}></Tab.Screen>
            <Tab.Screen name="Today" component={TodayScreen} options={()=>({
                title:"Today",
                tabBarIcon: ({color}) => <Icons name="calendar" color={color}/>,
                headerShown:false,
            })}></Tab.Screen>
            <Tab.Screen name="CategoriesStack" component={CategoriesScreen} options={()=>({
                title:"Categories",
                tabBarIcon: ({color}) => <Icons name="categories" color={color}/>,
                headerShown:false,
            })}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
