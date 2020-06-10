import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILShopeeMallGreatSale, ILHospitalBG, IconAccount, IconNext } from '../../../assets'
import { colors, fonts } from '../../../utils'

const MenuItem = ({ title, desc }) => {
    return (
        <View style={styles.container}>
            <IconAccount style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
            <IconNext />
        </View>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.disable,
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    content: {

    },
    icon: {
        marginRight: 10,
    },
    title: {
        flex: 1,
    },
    desc: {
        fontFamily: fonts.primary[200]
    }
})
