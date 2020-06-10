import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label}) => {
    // const [border, setBorder] = useState(colors.border);
    // const onFocusForm = () => {
    //     setBorder(colors.tertiary);
    // }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput  style={styles.input}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: 
    {borderWidth: 1, borderColor: colors.border, borderRadius: 10, padding: 12,},
    //  (border) => ({borderWidth: 1, borderColor: border, borderRadius: 10, padding: 12,}),
    label: {fontSize: 16, color: colors.text.secondary, marginBottom: 6, fontFamily: fonts.primary[400],}
})
