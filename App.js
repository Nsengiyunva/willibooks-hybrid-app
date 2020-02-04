import React from 'react';
import Realm from 'realm';
import Navigator from './app/navigation'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import TodoService  from './app/_services/TodoService'
import TodoModel  from './app/models/TodoModel'
import Utils from './app/_utils'

import HomeScreen from './app/screens/HomeScreen'

let items = TodoService.findAll();

export default class App extends React.Component {
  state = {
    newValue: '',
    firstName: ''
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
      //     placeholder='Add a item in the database'
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
    )
  }
}