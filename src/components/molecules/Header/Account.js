import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { DummyDoctor9, IconCart, IconChat, IconSetting } from '../../../assets'
import { Button } from '../../atoms'

const Account = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor9} style={styles.avatar} />
            <Text style={styles.name}>Eve</Text>
            <TouchableOpacity>
                <IconSetting style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <IconCart style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <IconChat />
            </TouchableOpacity>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingTop: 15,
        height: 100,
        paddingLeft: 20, paddingRight: 16,
        flexDirection: 'row',
    },
    avatar: {
        marginTop: 30,
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        resizeMode: 'contain',
        fontFamily: fonts.primary[600],
    },
    name: {
        marginLeft: 5,
        marginTop: 30,
        padding: 10,
        color: colors.white,
        flex: 1,
    },
    icon: {
        marginRight: 20,
    }
})
