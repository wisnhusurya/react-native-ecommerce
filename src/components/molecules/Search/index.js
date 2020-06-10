import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Gap } from '../../atoms';
import { colors, fonts } from '../../../utils';
import { IconSearchDarkGray } from '../../../assets';

const Search = ({ heightStatusBar, onPress, navigation }) => {
    return (
        <View style={styles.container(heightStatusBar)}>
            <TouchableOpacity style={styles.input} onPress={() => navigation.navigate('Cart')}>
                <IconSearchDarkGray style={styles.icon}/>
                <Text>Search</Text>
            </TouchableOpacity>
            <Button type="icon-only" icon="cart" onPress={() => navigation.navigate('Cart')}/>
            <Gap width={15} />
            <Button type="icon-only" icon="chat" onPress={() => navigation.navigate('Chat')}/>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: (heightStatusBar) => ({
        alignItems: 'center',
        position: 'absolute',
        padding: 16,
        // paddingTop: heightStatusBar + 10,
        paddingTop: 10,
        flexDirection: 'row',
    }),
    icon: {
        marginRight: 10,
    },
    input: {
        flexDirection: 'row',
        backgroundColor: colors.disable,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 35,
    },
})
