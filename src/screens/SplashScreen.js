import { StyleSheet, Text, View , Image} from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout( () => {
            navigation.navigate('Auth');
        },3000);
        return() => clearTimeout(timer);
    },[navigation])
  return (
    <View style={styles.container}>
      <Image source={require('../assets/shoping_logo.jpeg')} style={styles.logo}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    logo:{
        width:400,
        height:400
    }
})