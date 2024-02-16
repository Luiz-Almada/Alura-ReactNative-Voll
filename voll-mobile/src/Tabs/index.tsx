import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { screenOptions, tabs } from "../utils/MenuNavegacao";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}