import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Gap, Header, MenuItem, ShipmentStatus } from '../../components';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header title="Chats" type="chatOrange" onPress={() => navigation.goBack()}/>
                    {/* <Gap height={15} />
                    <MenuItem title="My Purchases" />
                    <ShipmentStatus/>
                     */}
                </ScrollView>
            </View>
        )
    }
}

export default Chat

const styles = StyleSheet.create({

})
