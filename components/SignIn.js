import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const SignInPage = ({ navigation }) => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In pressed");
  };

  const handleClientLogin = () => {
    navigation.navigate('HomePage'); // Navigate to HomePage for clients
  };

  const handleStaffLogin = () => {
    navigation.navigate('Home'); // Navigate to Home for staff
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" color="#FFA500" onPress={handleGoogleSignIn} />
      <View style={styles.spacer} />
      <Button title="Sign in as Client" color="#FFA500" onPress={handleClientLogin} />
      <View style={styles.spacer} />
      <Button title="Login as Staff" color="#FFA500" onPress={handleStaffLogin} />
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
    height: 20,
  },
});

export default SignInPage;
