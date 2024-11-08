import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";

type EntryScreenProp = StackNavigationProp<RootStackParamList, "Subscription">;

const SubscriptionScreen = () => {
  const navigation = useNavigation<EntryScreenProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Subscription!</Text>
      <Button
        title="Go to Subscription"
        onPress={() => navigation.navigate("Subscription")}
      />
    </View>
  );
};

export default SubscriptionScreen;
