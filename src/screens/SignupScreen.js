import React from "react";
import { View, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default SignupScreen;
