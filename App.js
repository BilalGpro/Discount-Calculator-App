import * as React from 'react';
import { NavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, View,Button, StyleSheet, Alert,Image,StatusBar,FlatList,TouchableOpacity,TextInput} from 'react-native';
import {ToggleButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';








//DISCOUNT CALCULATOR APP
export default function App() {
  const [value,setvalue]=useState(0);
  const increment= ()=>{
    setvalue(value+1)
  }
  const decrement= ()=>{
   if(value==0){
    Alert.alert('cannot decrement to negative value')
   }
   else{
    setvalue(value-1)
   }
  }
  const[final,setfinal]=useState(0);
  const[save,setsave]=useState(0);
  const[amount,setamount]=useState(0);
  const[discount,setdiscount]=useState(0);

  const calculate=()=>{
    setfinal(amount-(amount*discount/100));
    setsave(amount * discount/100)
  }



  return (
  
    <View style={{flex:1,backgroundColor:'black'}}>
      <View style={{backgroundColor:'#68EDC6',height:120,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:21,fontStyle:'italic'}}>DISCOUNT CALCLULATOR APP</Text>
      </View>
      <View style={{padding:40,alignItems:'center'}}>
      <Text style={{color:'white',fontSize:20}}>Final Price: {final}</Text>
      <Text style={{color:'white',fontSize:20}}>Discount Price: {save}</Text>
      </View>
      <View style={{alignItems:'center'}}>
        <TextInput style={{borderColor:'cyan',borderWidth:1,width:'80%',borderRadius:15,margin:12}} placeholder='Original Price' onChangeText={(val)=>setamount(val)}>
        </TextInput>
        <TextInput style={{borderColor:'cyan',borderWidth:1,width:'80%',borderRadius:15}} placeholder='Discount %' onChangeText={(val)=>setdiscount(val)}>
        </TextInput>
      </View>
      <View style={{margin:20}}>
      <Button title='Calculate' onPress={calculate} />
      </View>
      
    

      
    </View>
    
  )
}