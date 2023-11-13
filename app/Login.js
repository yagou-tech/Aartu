
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Pressable, Linking } from "react-native";


const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Login = ({ navigation }) => {
  const handleButtonPress = () => {
    // Action à effectuer lors du clic sur le bouton
  };
  const handleCreateAccountPress = () => {
    // Action à effectuer lors du clic sur "Créer un compte"
    navigation.navigate('SignalDO');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Group1.png')} />
      </View>
      <SafeAreaView>
        <TextInput style={styles.input} placeholder="Numero de telephone" />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <CustomButton onPress={handleButtonPress} title="Se connecter" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Mot de passe oublié?</Text>
          
            <TouchableOpacity>
              <Text style={styles.text2}>Créer un compte</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.text3}>Powered by Elikia</Text>

      </SafeAreaView>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 54,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#C4C4C4',

  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between",
  },
  text1: {
    fontWeight: "400",
    fontSize: 14,
    color: '#737373',
    
  },
  text2: {
    fontWeight: "400",
    fontSize: 14,
    color: '#737373',
  },
  text3: {
    textAlign: 'center',
    marginTop: 90,
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 136,
    height: 164,
    marginTop: 60,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 50,
    width: 308,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});