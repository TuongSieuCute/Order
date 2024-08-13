import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import React from 'react';

const Table = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./Image/background.png')}
      style={styles.img_background}>
      <View style={styles.container}>
        <View style={styles.V_header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Bill');
            }}>
            <Image
              source={require('./Image/back.png')}
              style={styles.IMG_header}
            />
          </TouchableOpacity>
          <Text style={styles.T_header}>DANH SÁCH BÀN</Text>
        </View>
        <View style={styles.V_table}>
          <TouchableOpacity
            style={styles.Tou_table}
            onPress={() => {
              navigation.navigate('Menu', {table: (nametable = 'Mang về')});
            }}>
            <Image
              source={require('./Image/bag.png')}
              style={styles.IMG_header}
            />
            <Text style={styles.T_table}>Mang về</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tou_table}
            onPress={() => {
              navigation.navigate('Menu', {table: (nametable = 'Bàn 1')});
            }}>
            <Image
              source={require('./Image/table.png')}
              style={styles.IMG_header}
            />
            <Text style={styles.T_table}>Bàn 1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.V_table}>
          <TouchableOpacity
            style={styles.Tou_table}
            onPress={() => {
              navigation.navigate('Menu', {table: (nametable = 'Bàn 2')});
            }}>
            <Image
              source={require('./Image/table.png')}
              style={styles.IMG_header}
            />
            <Text style={styles.T_table}>Bàn 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Tou_table}
            onPress={() => {
              navigation.navigate('Menu', {table: (nametable = 'Bàn 3')});
            }}>
            <Image
              source={require('./Image/table.png')}
              style={styles.IMG_header}
            />
            <Text style={styles.T_table}>Bàn 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img_background: {
    width: '100%',
    height: '100%',
  },
  V_header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:25,
  },
  IMG_header: {
    height: 50,
    width: 50,
  },
  T_header: {
    fontSize: 25,
    fontWeight: "500",
    // color: COLORS.textHeader,
    marginLeft: 65,
    color: 'black'
  },
  V_table: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Tou_table: {
    height: 100,
    width: 150,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#af4425'
  },
  T_table: {
    // color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
});
