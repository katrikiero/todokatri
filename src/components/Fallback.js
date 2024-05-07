import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const Fallback = () => {
    return (
        <View style={{ alignItems: "center" }}>
            <Image
                source={require("../../assets/nakittaja_logo.png")}
                style={{ width: 250, height: 250, marginTop: 30 }}>
            </Image>
            <Text style= {{
                fontSize: 18,
                color: '#23255d',
                textAlign: 'center',
                marginTop: 30,
                marginBottom: 20,
                }}>
                Moi! Aloita lisäämällä nakkeja. </Text>
        </View>
    )
}

export default Fallback

const styles = StyleSheet.create({})