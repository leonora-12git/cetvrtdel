import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import styles from './styles';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import userPic from '../../assets/userdefaulticon.jpg'
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userEmail,setUserEmail] = useState('');
  const navigation = useNavigation();
  const [todoData, setTodoData] = useState([]);


  useEffect(() => {
    const getCurrentUserEmail = () => {
      if (auth.currentUser) {
        setUserEmail(auth.currentUser.email);
      }
    };

    getCurrentUserEmail();
  }, []);

  


  const handleSignOut = () =>
  {
    auth
    .signOut()
    .then(() => {
      navigation.replace("HomeScreen")
    })
    .catch(error => alert(error.message))
  } 



  useEffect(() => {
    const postCountRef = ref(db, 'posts/');
    onValue(postCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPost = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
        pressed: false,
      }));
      console.log(newPost + "this is it");

      setTodoData(newPost);
    });
  }, []);


  

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userPic }} style={styles.profileImage} />
        <Text style={styles.username}>{userEmail}</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.messageButton}><Text style={styles.messageButtonText}>Sign Out</Text></TouchableOpacity>     
      </View>
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeader}>Events Created</Text>
        {todoData.map((item, index) => {
          if(item.user == userEmail)
          {
          return(
          <TouchableOpacity key={index} style={styles.eventBox} >
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.description}</Text>
          </TouchableOpacity>
          )
          }
       })}
      </View>

    </View>
  );
};

export default ProfileScreen