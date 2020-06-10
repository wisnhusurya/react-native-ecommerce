import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconBackDark } from '../../../assets';
import { Gap, Button } from '../../atoms';
import { colors, fonts } from '../../../utils';
import DarkProfile from './DarkProfile';
import Notifications from './Notifications';
import Account from './Account';

const Header = ({ onPress, title, type }) => {
    if (type === 'dark-profile') {
        return <DarkProfile />;
    }
    if (type === 'notifications') {
        return <Notifications navigation={onPress}/>;
    }
    if (type === 'account') {
        return <Account />;
    }

    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Button type="icon-only" icon={type}/>
            {/* <Gap width={15}/>
            <Button type="icon-only" icon="chat"/> */}
            <Gap width={24} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: (type) => ({
        paddingLeft: 16,
        paddingVertical: 15,
        backgroundColor: type === 'dark' ? colors.secondary : colors.white, flexDirection: 'row',
        alignItems: 'center', borderBottomLeftRadius: type === 'dark' ? 20 : 0,
        borderBottomRightRadius: type === 'dark' ? 20 : 0
    }),
    text: (type) => ({
        flex: 1, fontSize: 20,
        marginLeft: 25,
        fontFamily: fonts.primary[600],
        color: type === 'dark' ? colors.white : colors.text.primary,
    }),
})
