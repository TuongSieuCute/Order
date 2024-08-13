import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Bill = ({navigation}) => {
  const [bills, setbills] = useState([]);
  const [ModalVi, setModalVi] = useState(false);
  const [ind, setind] = useState('');
  const isLoad = useIsFocused();
  useEffect(() => {
    getBills();
  }, [isLoad]);
  const getBills = async () => {
    let data = await AsyncStorage.getItem('bills');
    let json = JSON.parse(data);
    setbills(json);
  };
  // const getBill = async () => {
  //   let data = await AsyncStorage.removeItem('bills');
  //   let json = JSON.parse(data);
  //   setbills(json);
  // };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./Image/background.png')}
        style={styles.img_background}>
        <View style={styles.v_header}>
          <Text style={styles.t_header}>DANH SÁCH HOÁ ĐƠN</Text>
        </View>
        <FlatList
          data={bills}
          renderItem={({item, index}) => {
            return (
              <View>
                <TouchableOpacity
                  style={styles.V_bill}
                  onPress={() => {
                    setModalVi(true);
                    // getBill();
                    setind(index);
                  }}>
                  <Text style={styles.T_bill}>{'Số HĐ: ' + index}</Text>
                  <Text style={styles.T_bill}>{'Bàn: ' + item.nameTable}</Text>
                  <Text style={styles.T_bill}>
                    {'Tổng tiền: ' + item.total}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.V_BtnBill}>
          <TouchableOpacity
            style={styles.Tou_BtnBill}
            onPress={() => {
              navigation.navigate('Table');
            }}>
            <Text style={styles.T_BtnBill}>Tạo hoá đơn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* Chi tiết hoá đơn */}
      <Modal transparent visible={ModalVi}>
        <View style={styles.V_Modal}>
          <View style={styles.V_header2}>
            <TouchableOpacity
              onPress={() => {
                setModalVi(false);
              }}>
              <Image
                source={require('./Image/back.png')}
                style={styles.IMG_header}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.V_Mobill}>
            <Text style={styles.T_Mobill}>HOÁ ĐƠN THANH TOÁN</Text>
          </View>
          <FlatList
            data={bills}
            renderItem={({item, index}) => {
              return (
                <View>
                  {index === ind ? (
                    <View style={styles.V_Flbill}>
                      <Text style={styles.T_Flbill}>{'Số HĐ   : ' + ind}</Text>
                      <Text style={styles.T_Flbill}>
                        {'Ngày     : ' + item.date}
                      </Text>
                      <Text style={styles.T_Flbill}>
                        {'Bàn       : ' + item.nameTable}
                      </Text>
                      <View style={styles.V_itemsBill}>
                        <Text style={styles.T_Flbill}>Tên hàng</Text>
                        <Text style={styles.T_Flbill}>SL</Text>
                        <Text style={styles.T_Flbill}>Đơn giá</Text>
                        <Text style={styles.T_Flbill}>Thành tiền</Text>
                      </View>
                      {item.data.map(items => {
                        return (
                          <View style={{borderWidth: 1, padding: 5, borderTopWidth:0,}}>
                            <Text style={styles.T_TenHang}>{items.Name}</Text>
                            <Text style={styles.T_Flbill1}>
                              x{items.Quantity}
                              {'              '} {items.Price}
                              {'                  '}
                              {items.Price * items.Quantity}
                            </Text>
                          </View>
                        );
                      })}
                      <View style={{marginTop:10,}}>
                        <Text style={{fontSize:20, fontWeight:'700', color:'black'}}>Tổng tiền thanh toán: {'                   '} {item.total}</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Bill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  img_background: {
    width: '100%',
    height: '100%',
  },
  v_header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  t_header: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  V_BtnBill: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Tou_BtnBill: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#af4425',
  },
  T_BtnBill: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  V_bill: {
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: '#af4425',
  },
  T_bill: {
    fontSize: 18,
    color: 'black',
  },
  V_Modal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'white',
  },
  V_header2: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  T_header2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 136,
  },
  IMG_header: {
    height: 50,
    width: 50,
  },
  V_Mobill: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  T_Mobill: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  V_Flbill: {
    marginHorizontal: 20,
  },
  T_Flbill: {
    fontSize: 15,
    color: 'black',
  },
  T_Flbill1: {
    fontSize: 15,
    color: 'black',
    left: 116,
  },
  V_itemsBill: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 5,
  },
  T_TenHang: {
    fontSize: 15,
    color: 'black',
  },
});
