import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const AddData = ({item, index, onclick}) => {
  return (
    <View>
      <View style={styles.V_name}>
        <View style={{width: '25%', height: '100%'}}>
          <Image
            style={styles.IMG_url}
            source={{uri: item.URL}}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '50%', height: '100%'}}>
          <Text style={styles.T_name}>{item.Name}</Text>
          <Text style={styles.T_price}>{item.Price}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>{
            onclick(index);
          }}>
            <Image
              style={styles.IMG_delete}
              source={require('./Image/delete.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.T_quantity}>x{item.Quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default AddData;

const styles = StyleSheet.create({
  V_name: {
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    margin: 10,
  },
  IMG_url: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  T_name: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
    marginHorizontal: 20,
    color: 'black',
  },
  T_price: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
    marginHorizontal: 20,
    color: '#af4425',
  },
  IMG_delete: {
    height:40,
    width:40,
    marginTop:10,
  },
  T_quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginHorizontal: 10,
    color: 'black',
  }
});
