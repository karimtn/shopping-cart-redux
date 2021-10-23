import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainStack from "./components/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import { Provider as StoreProvider } from "react-redux";

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
