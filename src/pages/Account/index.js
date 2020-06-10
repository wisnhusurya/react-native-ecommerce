import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ILHospitalBG } from '../../assets';
import { fonts, colors } from '../../utils';
import { ListHospital, Header, Gap, ListDoctor, MenuItem, ShipmentStatus } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header type="account" />
                    <Gap height={15} />
                    <MenuItem title="My Purchases" />
                    <ShipmentStatus/>
                    <MenuItem title="Digital Purchase"/>
                    <MenuItem title="Shopee Loyalty"/>
                    <MenuItem title="My Likes"/>
                    <MenuItem title="Recently Viewed"/>
                    <MenuItem title="Live Streaming"/>
                    <MenuItem title="ShopeePay"/>
                    <MenuItem title="My Vouchers"/>
                    <MenuItem title="Refer a Friend"/>
                    <MenuItem title="My Shopee Coins"/>
                    <MenuItem title="My Rating"/>
                    <Gap height={15} />
                    <MenuItem title="Account Settings"/>
                    <MenuItem title="Help Centre"/>
                    <MenuItem title="Chat with Shopee"/>
                </ScrollView>
            </View>
        )
    }
}

export default Account

const styles = StyleSheet.create({

})
