import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  boxContainer: {
    flexDirection: 'column',
    padding: 10,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  publisherName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 16,
    color: '#777777',
    marginBottom: 5,
  },
  likeCommentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likeButton: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  commentButton: {
    backgroundColor: '#DD4B39',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#ccc',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;