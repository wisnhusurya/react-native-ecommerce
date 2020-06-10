import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
    ILShopeeMallGreatSale,
    ILGratisOngkirXtra,
    ILPulsaTagihanHiburan,
    ILCashbackVoucher,
    ILShopeeMart,
    ILShopeeGames,
    ILShopeeBarokah,
    ILSiagaDariRumah,
    ILDealsSekitarmu,
    ILShopeeVideo,
    ILShopeeFashion,
    ILDiskonProdukPremium,
    ILPastiDiskon50,
    ILSemua5RB,
    ILShopeeFactoryOutlet,
    ILSerba10RB,
    ILMenSale,
    ILElektronikMurah,
    ILBayarDiTempat,
    ILShopee24,
    ILShopeeGrosir,
    ILShopeeLiga1,
    ILRewardKoinShopee,
    ILSemuaPromo
} from '../../../assets';

const Category = ({ text, onPress }) => {
    const Icon = () => {
        switch (text) {
            case 'Shopee Mall Great Sale':
                return <Image source={ILShopeeMallGreatSale} style={styles.illustration} />;
            case 'Gratis Ongkir Xtra':
                return <Image source={ILGratisOngkirXtra} style={styles.illustration} />;
            case 'Pulsa, Tagihan & Hiburan':
                return <Image source={ILPulsaTagihanHiburan} style={styles.illustration} />;
            case 'Cashback & Voucher':
                return <Image source={ILCashbackVoucher} style={styles.illustration} />;
            case 'Shopee Mart':
                return <Image source={ILShopeeMart} style={styles.illustration} />;
            case 'Shopee Games':
                return <Image source={ILShopeeGames} style={styles.illustration} />;
            case 'Shopee Barokah':
                return <Image source={ILShopeeBarokah} style={styles.illustration} />;
            case 'Siaga Dari Rumah':
                return <Image source={ILSiagaDariRumah} style={styles.illustration} />;
            case 'Deals Sekitarmu':
                return <Image source={ILDealsSekitarmu} style={styles.illustration} />;
            case 'Shopee Video':
                return <Image source={ILShopeeVideo} style={styles.illustration} />;
            case 'Shopee Fashion':
                return <Image source={ILShopeeFashion} style={styles.illustration} />;
            case 'Diskon Produk Premium':
                return <Image source={ILDiskonProdukPremium} style={styles.illustration} />;
            case 'Pasti Diskon 50%':
                return <Image source={ILPastiDiskon50} style={styles.illustration} />;
            case 'Semua 5RB':
                return <Image source={ILSemua5RB} style={styles.illustration} />;
            case 'Shopee Factory Outlet':
                return <Image source={ILShopeeFactoryOutlet} style={styles.illustration} />;
            case 'Serba 10 RIBU':
                return <Image source={ILSerba10RB} style={styles.illustration} />;
            case 'Men Sale':
                return <Image source={ILMenSale} style={styles.illustration} />;
            case 'Elektronik Murah':
                return <Image source={ILElektronikMurah} style={styles.illustration} />;
            case 'Bayar Di Tempat':
                return <Image source={ILBayarDiTempat} style={styles.illustration} />;
            case 'Shopee24':
                return <Image source={ILShopee24} style={styles.illustration} />;
            case 'Shopee Grosir':
                return <Image source={ILShopeeGrosir} style={styles.illustration} />;
            case 'Shopee Liga 1':
                return <Image source={ILShopeeLiga1} style={styles.illustration} />;
            case 'Reward Koin Shopee':
                return <Image source={ILRewardKoinShopee} style={styles.illustration} />;
            case 'Semua Promo':
                return <Image source={ILSemuaPromo} style={styles.illustration} />;
            default:
                return <Image source={ILShopeeMallGreatSale} style={styles.illustration} />;
        }
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: 90,
        alignItems: 'center'
    },
    illustration: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    text: {
        fontSize: 9,
        marginTop: 5,
        textAlign: 'center',
    },
})
