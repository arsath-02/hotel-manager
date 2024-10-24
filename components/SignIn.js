import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const SignInPage = ({ navigation }) => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In pressed");
  };

  const handleNextComponent = () => {
    navigation.navigate('Home'); // Navigate to HomePage
  };

  return (
    <View style={styles.container}>
      {/* Remove title if you want */}
      <Button title="Sign in with Google" color="#FFA500" onPress={handleGoogleSignIn} />
      <View style={styles.spacer} />
      <Button title="Go to Home Page" color="#FFA500" onPress={handleNextComponent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 20, // Adjust spacing as needed
  },
});

export default SignInPage;
