import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  messageButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    color: '#fff',
  },
  messageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  eventsContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  eventsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventBox: {
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
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
