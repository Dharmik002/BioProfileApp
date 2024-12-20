import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('./assets/profile.jpg')}
        />
        <Text style={styles.name}>Dharmik Mangukiya</Text>
        <Text style={styles.bio}>Hi! I'm a software developer with a passion for building intuitive and responsive mobile applications. I love working with React Native.</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Contact Information</Text>
        <Text style={styles.infoText}>Email: dharmikmangukiya03@gmail.com</Text>
        <Text style={styles.infoText}>Phone: +431 276 1261</Text>
        <Text style={styles.infoText}>Location: Winnipeg, Canada</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#3cb371',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default App;
