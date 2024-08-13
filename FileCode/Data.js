import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Data = ({item, index, onclick}) => {
  return (
    <TouchableOpacity onPress={()=>{
      onclick(index);
    }}>
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
      </View>
    </TouchableOpacity>
  );
};

export default Data;

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
});
