import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const First = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./Image/background.png')}
      style={styles.img_background}>
      <View style={styles.container}>
        <View>
          <Text style={styles.t_name}>Nguyễn Cát Tường - 47.01.104.233</Text>
          <Text style={styles.t_name}>Trần Thanh Sang - 47.01.104.182</Text>
        </View>
        <View>
          <Image
            source={require('./Image/first.png')}
            style={styles.img_first}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.tou_BatDau}
            onPress={() => {
              navigation.navigate('Bill');
            }}>
            <Text style={styles.t_BatDau}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_background: {
    width: '100%',
    height: '100%',
  },
  img_first: {
    height: 200,
    width: 300,
  },
  t_name: {
    // color:COLORS.textHeader,
    fontSize:15,
  },
  tou_BatDau: {
    borderWidth: 2,
    padding: 10,
    paddingHorizontal: 50,
    // backgroundColor: COLORS.bgbutton,
    marginTop:10,
    marginLeft:10,
    borderRadius: 10,
    backgroundColor: '#af4425'
  },
  t_BatDau: {
    fontSize: 30,
    // color: COLORS.textButton,
    fontWeight: 'bold',
  },
});
