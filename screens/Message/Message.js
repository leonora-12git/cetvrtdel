import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MessagingScreen = ({ route }) => {
  const { username } = route.params;
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log(message);
    // send message logic here
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here"
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MessagingScreen;
