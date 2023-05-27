import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { useEffect } from 'react';
import {  signInAnonymously,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import en from '../translations/en';
import mk from '../translations/mk';

const HomeScreen = () => {
    const navigation = useNavigation();
    const provider = new GoogleAuthProvider();
    const [language,setLanguage]= useState(en);

    const handleRegisterPress = () => {
        navigation.navigate('Register');
      }; 
       const handleLoginPress = () => {
        navigation.navigate('LogIn');
      };


      const handleAnonymousLogin = async () => {
        try {
          const userCredential = await signInAnonymously(auth)
          // You can access the user information via userCredential.user
          console.log('Logged in anonymously', userCredential.user);
          navigation.replace("MainPage")
          // You can navigate to the main screen or perform any other action here
        } catch (error) {
          console.error('Failed to log in anonymously', error);
        }
      };


      const handleGoogleSignIn = async () =>
      {
      await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    navigation.replace("MainPage");
    console.log("Logged In")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
      }


        const handleLanguageChange =(lang)=>
        {
          setLanguage(lang)
        }

      

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user && user.isAnonymous) {
            console.log('User is already logged in anonymously');
            navigation.navigate('Events')
          }
        });
    
        // Clean up the listener when the component is unmounted
        return () => unsubscribe();
      }, []);
    

  return (
    
    <View style={styles.container}>
   
      <Text style={styles.title}>Don't miss your events!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>{language.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>{language.register}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>{language.logingoogle}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAnonymousLogin}>
        <Text style={styles.buttonText}>{language.anonLogin}</Text>
      </TouchableOpacity>
      <Text>Select Language:</Text>
      <Button
        title="English"
        onPress={() => handleLanguageChange(en)}
      />
      <Button
        title="Macedonian"
        onPress={() => handleLanguageChange(mk)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
