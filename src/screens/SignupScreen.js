import React, { useState, useContext } from "react";
import { View, StyleSheet  } from "react-native";
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../components/Spacer"
import {Context as AuthContext} from '../context/AuthContext'

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <View style={styles.container}>
    <Spacer>
      <Text h3>Sign Up For Tracker</Text>
    </Spacer>
      <Input label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}/>
    <Spacer />
      <Input
      secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage? <Text style ={styles.errorMessage}>{state.errorMessage}</Text>:null}
    <Spacer>
      <Button title="Sign Up"onPress={() => signup({ email,password})} />
      </Spacer>
      </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header:false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 15,
    color: 'red',
    marginLeft: 15,
    marginTop:15
  }
});

export default SignUpScreen;
