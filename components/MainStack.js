import React from "react";
import BooksScreen from "../screens/BooksScreen";
import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Livres"
        component={BooksScreen}
        options={{
          headerRight: (props) => <ShoppingCartIcon {...props} />,
        }}
      />
      <Stack.Screen name="Panier" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
