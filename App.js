import React from 'react';
import Realm from 'realm';
import Navigator from './app/navigation'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import TodoService  from './app/_services/TodoService'
import TodoModel  from './app/models/TodoModel';
import Utils from './app/_utils'
import HomeScreen from './app/screens/HomeScreen'

let items = TodoService.findAll();

export default class App extends React.Component {
  state = {
    newValue: '',
    firstName: '',
  }
  constructor( props ){
    super( props );
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+44',
      confirmResult: null
    }
  }
  componentDidMount(){
    // this.unsubscribe = firebase.auth().onAuthStateChanged( user => {
    //   if( user ){
    //     this.setState({ user: user.toJSON() })
    //   }
    // })
  }
  onChange = (event) => {
    this.setState({ newValue: event.nativeEvent.text })
  }
  _updateMasterState = (attrName, value) => {
    this.setState({ [ attrName ]: value })
  }
  onPress = () => {
      let newdataItem= new TodoModel(this.state.newValue);
      var dataItem = Utils.findTodo( newdataItem, [] );

      TodoService.save( newdataItem );
      this.setState({ newValue: '' })
  }
  render(){
   let renderItems =  Array.from(items);
    return (
      <Navigator />
      // <>
      //   <TextInput
          // placeholder='Add a item in the database'
      //     blurOnSubmit={false}
      //     value={this.state.newValue}
      //     onChange={this.onChange}
      //     style={{ borderWidth: 1, width: '90%', margin: '5%',fontSize: 18, paddingTop: 10 }}
      // />
      // <TouchableOpacity
      //   onPress={() => this.onPress()}
      //   style={{ marginLeft: 10, borderWidth: 1, width: 150,padding: 4, justifyContent:'center', alignItems: 'center'}}>
      //   <Text>Submit</Text>
      // </TouchableOpacity>
      // <View>
      //   {renderItems.map( item => {
      //     return (
      //       <Text key={item.id}>{item.title}</Text>
      //     )
      //   })}
      // </View>
     // </>
    //  <HomeScreen
    //   attrName='firstName'
    //   title='First Name'
    //   value={this.state.firstName}
    //   updateMasterState={this._updateMasterState}
    //   textInputStyles={{
    //     color: 'green',
    //     fontSize: 15
    //   }}
    //   otherTextInputProps = {{
    //     maxLength: 12
    //   }}
    //  />
    <View>

    </View>
    )
  }
}
// import React, { Component } from 'react';
// import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, TextInput } from 'react-native';
//
// import firebase from 'react-native-firebase';
//
// class PhoneAuthScreen extends Component {
//   state = {
//     phone: '',
//     confirmResult: null,
//     verificationCode: '',
//     userId: ''
//   }
//   validatePhoneNumber = () => {
//     var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
//     return regexp.test( this.state.phone );
//   }
//   handleSendCode = () => {
//     // alert( this.state.phone );
//     if( this.validatePhoneNumber() ){
//       // alert('we are here');
//       firebase.auth().signInWithPhoneNumber( this.state.phone )
//               .then( result => {
//                 alert('we are here', result)
//               })
//     //   firebase.auth().signInWithPhoneNumber( this.state.phone )
//     //           .then( confirmResult => {
//     //             this.setState({ confirmResult })
//     //           })
//     //           .catch( error => {
//     //             alert( error.message )
//     //             console.log( error )
//     //           })
//     } else {
//       alert('invalid phone number')
//     }
//   }
//   renderConfirmationCodeView = () => {
//     return (
//       <View style={styles.verificationView}>
//         <TextInput
//             style={styles.textInput}
//             placeholder='Verification code'
//             placeholderTextColor='#eee'
//             value={this.state.verificationCode}
//             keyboardType='numeric'
//             onChangeText={ verificationCode => {
//               this.setState({ verificationCode })
//             } }
//             maxLength={6}
//         />
//         <TouchableOpacity style={[styles.themeButton, { marginTop: 20 }]}
//           onPress={this.handleVerifyCode}>
//           <Text style={styles.themeButtonTitle}>Verify Code</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
//   render(){
//     return (
//       <SafeAreaView style={[styles.container, { backgroundColor: '#333'} ]}>
//         <View style={styles.page}>
//           <TextInput
//             style={styles.textInput}
//             placeholder='Phone Number with country code'
//             placeholderTextColor='#eee'
//             keyboardType='phone-pad'
//             value={this.state.phone}
//             onChangeText={phone => { this.setState({ phone }) }}
//             maxLength={15}
//             editable={this.state.confirmResult ? false: true}
//           />
//           <TouchableOpacity
//             style={[ styles.themeButton, { marginTop: 20 }]}
//             onPress={this.state.confirmResult ? this.changePhoneNumber : this.handleSendCode }>
//             <Text style={styles.themeButtonTitle}>
//               {this.state.confirmResult ? 'Change Phone Number' : 'Send Code'}
//             </Text>
//           </TouchableOpacity>
//           {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
//         </View>
//       </SafeAreaView>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaa'
//   },
//   page: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   textInput: {
//     marginTop: 20,
//     width:' 90%',
//     height: 40,
//     borderColor: '#555',
//     borderWidth: 2,
//     borderRadius: 5,
//     paddingLeft: 10,
//     color: '#fff',
//     fontSize: 16
//   },
//   themeButton: {
//     width: '90%',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#888',
//     borderColor: '#555',
//     borderWidth: 2,
//     borderRadius: 5
//   },
//   themeButtonTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff'
//   },
//   verificationView: {
//     width:'100%',
//     alignItems: 'center',
//     marginTop: 50
//   }
// })
//
// export default PhoneAuthScreen;
