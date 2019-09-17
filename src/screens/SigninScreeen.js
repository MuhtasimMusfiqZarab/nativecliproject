import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default SigninScreen;
