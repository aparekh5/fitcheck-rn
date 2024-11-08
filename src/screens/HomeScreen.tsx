import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";

type EntryScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<EntryScreenProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Home SCREEN!</Text>
      <Button
        title="Go to Subscription"
        onPress={() => navigation.navigate("Subscription")}
      />
    </View>
  );
};

export default HomeScreen;
