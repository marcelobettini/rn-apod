import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import PicInfo from "../components/PicInfo";
import DatePicker from "../components/DatePicker";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();
const routerScreensDefault = {

  headerStyle: {
    // backgroundColor: '#f4511e',
  },
  headerShadowVisible: false,
  headerTintColor: '#000000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },

};
const GoToDatePicker = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("Date Picker")}>
      <FontAwesome5 name="calendar-alt" size={24} color="black" />
    </TouchableOpacity>
  );
};



export default function Router() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => <GoToDatePicker />,
            ...routerScreensDefault
          }}

        />
        <Stack.Screen
          name="+ Info"
          component={PicInfo}
          options={routerScreensDefault}
        />
        <Stack.Screen
          name="Date Picker"
          component={DatePicker}
          options={routerScreensDefault}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



