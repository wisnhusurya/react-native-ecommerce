import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Platform, Image, StatusBar, FlatList } from 'react-native';
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItem, Gap, Search, Category, ListProduct } from '../../components';
import { fonts, colors } from '../../utils';
import { JSONCategoryDoctor, ILBanner1, ILBanner2, ILBanner3 } from '../../assets';
import { SliderBox } from "react-native-image-slider-box";
import InputChat from '../../components/molecules/InputChat';
//API
import { requestDummy } from '../../store/action/dummy';
import { requestGetCart } from '../../store/action/getCart';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyFlatlist: ''
        };
    }

    componentDidMount(){
        const { requestDummy } = this.props
        requestDummy()
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log('[willReceive]', props.respDummyOk.status)
        if(props.respDummyOk != undefined) {
            if(props.respDummyOk.status == true) {
                this.setState({ dummyFlatlist: props.respDummyOk.data1 })
            }
        }
    }

    render() {
        const { dummyFlatlist } = this.state
        console.log('[dumy]', dummyFlatlist)
        const { navigation } = this.props;
        StatusBar.setBarStyle("dark-content");
        StatusBar.setBackgroundColor("rgba(0,0,0,0)");
        // StatusBar.setTranslucent(false);

        const STATUSBAR_HEIGHT = StatusBar.currentHeight;
        const state = {
            images: [
                "https://cf.shopee.co.id/file/webp/382d5af8a887ca784300113a4baa1cf0",
                "https://cf.shopee.co.id/file/webp/370b0a632de72452b13860a5bb04fe98",
                "https://cf.shopee.co.id/file/webp/762066fcac0698624bed9c7c677e5768",
                "https://cf.shopee.co.id/file/webp/ea237969abd299598247fc391881609d",
                "https://cf.shopee.co.id/file/webp/a323eaecdbffb0bb226e5b08fd20c2b3",
                "https://cf.shopee.co.id/file/webp/d92a22270ce971d95ad4dc2617c058a1",
                "https://cf.shopee.co.id/file/webp/5cb1dfbd0a5c7a6c69dff56beaf912a6",
                "https://cf.shopee.co.id/file/webp/32fbc15c4348d699146ca10aeab3a089",
                "https://cf.shopee.co.id/file/webp/1d9d14fd530f04a9d8a4e17707926ef7"
            ]
        };
        return (
            <View style={styles.page}>
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <SliderBox
                            images={state.images}
                            sliderBoxHeight={219}
                            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor={colors.primary}
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={20}
                            autoplay={true}
                            circleLoop
                            imageLoadingColor='transparent'
                        />
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View>
                                <View style={styles.category}>
                                    <Category text="Shopee Mall Great Sale" onPress={() => navigation.navigate('Cart')} />
                                    <Category text="Pulsa, Tagihan & Hiburan" />
                                    <Category text="Shopee Mart" />
                                    <Category text="Shopee Barokah" />
                                    <Category text="Deals Sekitarmu" />
                                    <Category text="Shopee Fashion" />
                                    <Category text="Pasti Diskon 50%" />
                                    <Category text="Shopee Factory Outlet" />
                                    <Category text="Men Sale" />
                                    <Category text="Bayar Di Tempat" />
                                    <Category text="Shopee Grosir" />
                                    <Category text="Reward Koin Shopee" />
                                </View>
                                <View style={styles.category}>
                                    <Category text="Gratis Ongkir Xtra" />
                                    <Category text="Cashback & Voucher" />
                                    <Category text="Shopee Games" />
                                    <Category text="Siaga Dari Rumah" />
                                    <Category text="Shopee Video" />
                                    <Category text="Diskon Produk Premium" />
                                    <Category text="Semua 5RB" />
                                    <Category text="Serba 10 RIBU" />
                                    <Category text="Elektronik Murah" />
                                    <Category text="Shopee24" />
                                    <Category text="Shopee Liga 1" />
                                    <Category text="Semua Promo" />
                                </View>
                            </View>
                        </ScrollView>

                        <View style={styles.category}>
                            <Image source={ILBanner1} resizeMode="contain" style={styles.bannerEdge} />
                            <Image source={ILBanner2} resizeMode="contain" style={styles.bannerMid} />
                            <Image source={ILBanner3} resizeMode="contain" style={styles.bannerEdge} />
                        </View>

                        <Gap height={15} />

                        <FlatList 
                            horizontal={true}
                            initialNumToRender={1}
                            showsHorizontalScrollIndicator={false}
                            data={dummyFlatlist}
                            renderItem={({ item }) => <ListProduct image={item.foto} nama_produk={item.nama} harga={item.harga} />}
                            keyExtractor={item => item.id}
                        />

                        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <ListProduct />
                            <ListProduct />
                            <ListProduct />
                            <ListProduct />
                        </ScrollView> */}

                        <Gap height={15} />
                        <Search navigation={navigation}/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    respDummyOk: state.dummy.respDummyOk,
    // respGetCart: state.getCart.resGetCartOk,
});

const mapDispatchToProps = dispatch => ({
    //  dummy: () => dispatch(dummy()),
    requestDummy: () => dispatch(requestDummy()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

// export default Home

const styles = StyleSheet.create({
    category: {
        paddingVertical: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
    },
    bannerEdge: {
        maxWidth: '30%',
        height: 110,
    },
    bannerMid: {
        maxWidth: '40%',
        height: 110,
    },
})
