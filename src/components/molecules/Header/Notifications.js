import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { DummyDoctor9, IconCartOrange, IconChatOrange } from '../../../assets'
import { Button } from '../../atoms'

const Notifications = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Notifications</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <IconCartOrange style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <IconChatOrange />
            </TouchableOpacity>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 15,
        paddingLeft: 20, paddingRight: 16,
        flexDirection: 'row',
    },
    name: {
        fontSize: 20,
        flex: 1,
        fontFamily: fonts.primary[600],
    },
    icon: {
        marginRight: 15,
    }
})
