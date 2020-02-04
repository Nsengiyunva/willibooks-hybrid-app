import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import Input from '../../components/Input'
import { string, func, object, number } from 'prop-types'

const { height, width } = Dimensions.get('screen')

class HomeScreen extends React.Component {
    static propTypes = {
        
    }
    static defaultProps = {
    }
    state = {
        username: '',
        password: '',
        emailAddress: '',
        confirmPassword:'',
        phoneNumber:'',
        signUpActive: false
    }
    _updateMasterState = (attrName, value) => {
        this.setState({ [ attrName ]: value })
    }
    renderSignIn = () => {
        return (
            <View style={styles.innerContent}>
                        <Text>Welcome to willibooks app</Text>
                        <Input 
                            attrName='username'
                            title='User Name'
                            value={this.state.username}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24
                            }}
                        />
                        <Input 
                            attrName='password'
                            title='Password'
                            value={this.state.password}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24,
                                secure: true
                            }}
                        />
                        <TouchableOpacity onPress={() => alert('charlie')} style={{ alignSelf: 'flex-end', marginTop: 10 }}>
                            <Text style={[styles.btnText,{ color:'black'}]}>Forgot Password ?</Text>
                        </TouchableOpacity>
                   </View>
        )
    }
    renderRegister= () => {
        return (
            <View style={styles.innerContent}>
                        <Text>New Account</Text>
                        <Input 
                            attrName='username'
                            title='User Name'
                            value={this.state.username}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24
                            }}
                        />
                        <Input 
                            attrName='emailAddress'
                            title='Email Address'
                            value={this.state.emailAddress}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24
                            }}
                        />
                        <Input 
                            attrName='password'
                            title='Password'
                            value={this.state.password}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24,
                                secure: true
                            }}
                        />
                        <Input 
                            attrName='confirmPassword'
                            title='Confirm Password'
                            value={this.state.confirmPassword}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24,
                                secure: true
                            }}
                        />
                        <Input 
                            attrName='phoneNumber'
                            title='Phone Number'
                            value={this.state.phoneNumber}
                            updateMasterState={this._updateMasterState}
                            textInputStyles={{
                                fontSize: 17
                            }}
                            otherTextInputProps = {{
                                maxLength: 24,
                                secure: true
                            }}
                        />
                   </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.topLayer}>
                    <View style={styles.topLogo}>
                        <Text style={styles.title}>Willibooks</Text>
                    </View>
                    <View style={styles.topBtns}>
                       <TouchableOpacity style={[styles.topBtn, { borderBottomWidth: this.state.signUpActive ? 0 : 3 } ]} onPress={() => this.setState({ signUpActive: false })}>
                            <Text style={[styles.btnText, { color: this.state.signUpActive ? 'white': 'orange'} ]}>Sign In</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={[ styles.topBtn, { borderBottomWidth: this.state.signUpActive ? 3 : 0 } ]} onPress={() => this.setState({ signUpActive: true })}>
                            <Text style={[styles.btnText, { color: this.state.signUpActive ? 'orange': 'white' }]}>Sign Up</Text>
                       </TouchableOpacity>
                    </View>
               </View>
               <View style={styles.content}>
                   {!this.state.signUpActive ? this.renderSignIn() : this.renderRegister()}
               </View>
               <TouchableOpacity style={[styles.topBtn,{ width: '100%', backgroundColor: 'orange', marginBottom: 1}]} onPress={() => alert('forgotten password')}>
                    <Text style={styles.btnText}>{!this.state.signUpActive ? `Login` : `Sign Up`}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topLayer: {
        width: '100%',
        flex: 1.5,
        // borderWidth: 1,
        backgroundColor: 'green',
        alignItems: 'center'
    },
    content:{
        flex: 3,  
    },
    innerContent: {
        padding: '5%',
    },
    topLogo: {
        flex: 3,
        justifyContent: 'center',
        alignItems:'center'
    },
    topBtns: {
        flex: 1,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 17,
        color: 'white'
    },
    btnText:{
        color:'white'
    },
    topBtn: {
        padding: 10,
        width: width/2,
        // borderWidth: 0.5,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default HomeScreen;