import React, { useState,useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestoredb } from '../../firebase';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { } from 'react';
import { db } from '../../firebase';
import { ref,set } from 'firebase/database'
import { auth } from '../../firebase';

const CreateEventPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userEmail,setUserEmail] = useState('');


  const addPost = async (title, description, likes) => {
    try {
      const postsCollection = collection(firestoredb, 'posts');
      const newPostRef = await addDoc(postsCollection, {
        title: title,
        description: description,
      });
  
      console.log('Post added with ID:', newPostRef.id);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  
  // Usage example
  
  
 
  useEffect(() => {
    const getCurrentUserEmail = () => {
      if (auth.currentUser) {
        setUserEmail(auth.currentUser.email);
      }
    };

    getCurrentUserEmail();
  }, []);

  
  
  const addData = () => {
    set(ref(db, 'posts/' + title),{
      title:title,
      description:description,
      user:userEmail,
  
    });
    setTitle('');
    setDescription('');
    addPost(title,description,10);
    

    console.log("added")
  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Event</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={(text) =>setDescription(text)}
          value={description}
        />
   
      </View>
      <TouchableOpacity style={styles.createButton} onPress={addData}>
        <Text style={styles.createButtonText}>Create Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  photoButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  photoPreview: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreateEventPage;
