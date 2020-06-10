import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconAccount } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ShipmentStatus = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.status}>
                <IconAccount/>
                <Text style={styles.text}>To Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.status}>
                <IconAccount/>
                <Text style={styles.text}>To Ship</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.status}>
                <IconAccount/>
                <Text style={styles.text}>To Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.status}>
                <IconAccount/>
                <Text style={styles.text}>To Rate</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ShipmentStatus

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        borderBottomWidth: 1,
        borderBottomColor: colors.disable,
    },
    status: {
        alignItems: 'center',
        paddingVertical: 15
    },
    text: {
        marginTop: 5,
    }
})
