import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const BoutonReutilisable = ({title}) => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.btn}>{title}</Pressable>
    </View>
  )
}

export default BoutonReutilisable

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        backgroundColor:'#FF0000',
        color: '#fff',
        width: 308,
        height: 40,
        padding: 10,
        textAlign: 'center',
        borderRadius: 30
    }
})