import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { ListDoctor, Header } from '../../components';
import { colors, fonts } from '../../utils';
import { ILNoOrder } from '../../assets';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.page}>
                <Header title="Notifications" type="notifications" onPress={navigation}/>
                <Text style={styles.text}>Order Updates</Text>
                <View style={styles.content}>
                    <Image source={ILNoOrder} style={styles.picture} />
                    <Text>No order yet</Text>
                </View>
            </View>
        )
    }
}


export default Notification

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontFamily: fonts.primary[600],
        padding: 15,
    },
    picture: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
})
