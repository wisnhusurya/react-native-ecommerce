import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconBackDark, IconBackLight, IconCart, IconChat, IconChatOrange } from '../../../assets';

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'back-dark') {
            return <IconBackDark/>
        }
        if (icon === 'back-light') {
            return <IconBackLight/>
        }
        if (icon === 'cart') {
            return <IconCart/>
        }
        if (icon === 'chat') {
            return <IconChat/>
        }
        if (icon === 'chatOrange') {
            return <IconChatOrange/>
        }
        return <IconBackDark />
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly
