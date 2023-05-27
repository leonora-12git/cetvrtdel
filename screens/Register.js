import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import { auth} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () =>{
  createUserWithEmailAndPassword(auth,email,password)
  .then(userCredentials => {
    const user = userCredentials.user;
    console.log(user.email);
    navigation.replace("MainPage")
    
  })
  .catch(error => (alert(error.message)))

  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
         <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#007bff" />
      </TouchableOpacity>
      <Text style={styles.title}>REGISTER</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 40,
  },
});
