import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import Intro from "../components/onboarding/Intro";
import ImagePicker from "../components/onboarding/ImagePicker";
import UserInfo from "../components/onboarding/UserInfo";
import Login from "../components/onboarding/Login";

const OnboardingScreen = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Intro />;
      case 2:
        return <ImagePicker />;
      case 3:
        return <UserInfo />;
      case 4:
        return <Login />;
      default:
        return <Intro />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderStep()}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        {step > 1 ? <Button title="Back" onPress={prevStep} /> : <View />}
        {step < 4 ? <Button title="Next" onPress={nextStep} /> : <View />}
        {step === 4 && (
          <Button
            title="Finish"
            onPress={() => alert("Onboarding Complete!")}
          />
        )}
      </View>
      <Text style={{ textAlign: "center", margin: 10 }}>Step {step} of 4</Text>
    </View>
  );
};

export default OnboardingScreen;
