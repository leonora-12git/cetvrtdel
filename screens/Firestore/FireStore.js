import { addDoc, collection } from 'firebase/firestore';
import { firestoredb } from '../../firebase';

const addPost = async (title, description, likes) => {
  try {
    const postsCollection = collection(firestoredb, 'posts');
    const newPostRef = await addDoc(postsCollection, {
      title: title,
      description: description,
      likes: likes,
    });

    console.log('Post added with ID:', newPostRef.id);
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

// Usage example
addPost('Example Title', 'Example Description', 10);
