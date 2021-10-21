import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShoppingCartIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Panier")}
      style={{ marginRight: 10 }}
    >
      <Ionicons name="ios-cart" size={32} color="#101010" />
    </TouchableOpacity>
  );
};

export default ShoppingCartIcon;
