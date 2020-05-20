import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import splash from './assets/splash.png';
import { createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';
import FolderRenderer from './FolderRenderer';

const Stack = createStackNavigator();


export default function App() {
  const [customFont, setCustomFont] = React.useState(null);


 let loadFont = async () => {
   Font.loadAsync({
    FabricMDL2Icons: require('./assets/fonts/fabric-icons-custom.woff')
   }).then(() => {
    setCustomFont({loaded: true});
   })
   .finally(
     
   );
   
 }  
  return (
    <View style={styles.container}>
      <FolderRenderer folderName="Test1" />
      <FolderRenderer folderName="Test2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom:10
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
