import React, {useState, useRef} from "react";
 import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
 import {colors,  parameters} from  "../../global/styles";

 import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import { tittle } from "../../global/styles";
import * as Animatable from "react-native-animatable";

 const SignInScreen = () => {

    const[textInput2Fossued, setTextInput2Fossued] = useState(false);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    return(

        <View style = {styles.container}>
           <Header  tittle="MY ACCOUNT" type="arrow-left"/>

           <View style = {{marginLeft: 20, marginTop: 10}}>
             <Text style = {tittle}> Sign-In</Text>
           </View>
           <View style = {{alignItems: "center", marginTop: 10}}>
               <Text style = {styles.text1}>Please enter the email and password </Text>
               <Text style = {styles.text1}>registered with your account</Text>
           </View>
           <View style = {{marginTop: 20,}}>
                  <View>
                      <TextInput 
                        style = {styles.textInput1}
                        placeholder = "Email"
                        ref={textInput1}
                        />
                  </View>
                  <View style = {styles.textInput2}>
                      <Animatable.View style = {{marginLeft: 10}}>
                         <Icon 
                         name="lock"
                         iconStyle={{color: colors.grey3}}
                         type = "material"
                         style={{}}
                         />
                      </Animatable.View>
                      <Animatable.View style = {{flex: 1}}>
                          <TextInput 
                           placeholder = "Password"
                           ref={textInput2}
                           onFocus = {() => {
                               setTextInput2Fossued(false);
                           }}
                           onBlur = {() => {
                               setTextInput2Fossued(true);
                           }}
                          />
                      </Animatable.View>

                      <Animatable.View style = {{marginRight: 10}} animation = {textInput2Fossued?"":"fadeInLeft"} duration = {200}>
                          <Icon
                          name="visibility-off"
                          iconStyle={{color:colors.grey3}}
                          type = "material"
                          style={{marginRight: 10}}
                          />
                      </Animatable.View>
                  </View>
           </View>

           <View style = {{marginHorizontal: 20, marginVertical: 20}}>
                <Button 
                  title="SIGN IN"
                  buttonStyle = {parameters.styledButton}
                  titleStyle = {parameters.buttonTitle}
                 />
           </View>
           <View style = {{alignItems: "center"}}>
               <Text style = {[styles.text1, {textDecorationLine: "underline"}]}>Forgot Password?</Text>
           </View>
           <View style = {{alignItems: "center", marginTop: 20}}>
               <Text style = {{color: "white", fontWeight: "bold", fontSize: 22}}>OR</Text>
           </View>
           <View>
               <SocialIcon 
               title="Sign in with facebook"
               button
               type="facebook"
               style = {styles.socialIcon}
               onPress = {() => {}}
               />
                     <SocialIcon 
               title="Sign in with google"
               button
               type="google"
               style = {styles.socialIcon}
               onPress = {() => {}}
               />
           </View>
           <View style = {{marginTop: 20, paddingLeft: 20}}>
               <Text style = {[styles.text1,]}>New on ExpressFood ?</Text>
           </View>
           <View style = {{alignItems: "flex-end", marginTop: 20}}>
               <Button title="Create an account" buttonStyle = {styles.createButton} titleStyle = {styles.createButtonTitle} /> 
           </View>
        </View>

    );
 }

 const styles = StyleSheet.create({
       container: {
           flex: 1,
       },
       text1: {
           color: colors.grey3,
           fontSize: 16,
       },
       textInput1: {
           borderWidth: 1,
           borderColor:  "#86939e",
           marginHorizontal: 20,
           borderRadius: 12,
           marginBottom: 20,
       },
        textInput2: {
            borderWidth: 1,
            borderRadius: 12,
            marginHorizontal: 20,
            borderColor: "#86939e",
           flexDirection: "row",
           alignContent: "center",
           alignItems: "center",
        },
        socialIcon : {
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20,
        },
        createButton: {
            backgroundColor: "white",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 12,
            borderWidth: 1,
            borderColor:  colors.buttons,
            height: 45,
            paddingHorizontal: 20,
            width: 180,
            marginRight: 20
        },
        createButtonTitle: {
            color: colors.buttons,
            fontSize: 14
        }
 });

 export default SignInScreen;