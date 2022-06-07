import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import {colors, parameters} from "../global/styles";
import {Icon} from 'react-native-elements';


 const Header = ({tittle, type}) => {

    return (
         <View style = {styles.header}>
            <View style = {{marginLeft: 16}}>
                <Icon 
                 type="material-community"
                 name= {type}
                 color = "white"
                 size={28}
                 onPress = {() => {}}
              
                />
            </View>
            <View>
                <Text style = {styles.headerTxt}>
                    {tittle}
                </Text>
            </View>
         </View>
    );

}

const styles = StyleSheet.create({
     header: {
         flexDirection: "row",
         alignItems: "center",
         backgroundColor: colors.buttons,
         height: parameters.headerHeight
     },
     headerTxt: {
         color: "white",
         fontSize: 22,
         fontWeight: "bold",
        marginLeft: 20,
     }
});

export default Header;