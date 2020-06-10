import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILShopeeMallGreatSale, ILHospitalBG } from '../../../assets'
import { colors } from '../../../utils'

const ListProduct = ({image, nama_produk, harga}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: image }} style={styles.picture} />
                <Text>{nama_produk}</Text>
                <Text>{harga}</Text>
            </View>
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    content: {
        borderRadius: 10,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    picture: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 150,
        height: 200
    },
})
