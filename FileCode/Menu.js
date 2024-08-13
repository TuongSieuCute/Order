import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Data from './Data';
import AddData from './AddData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = ({navigation, route}) => {
  const {table} = route.params;
  const [data, setdata] = useState([]);
  const [ModalVi, setModalVi] = useState(false);
  const [addfood, setaddfood] = useState([]);
  useEffect(() => {
    getList();
    return () => {};
  }, []);

  const getList = () => {
    const apiURL = 'https://6453a8a0c18adbbdfea3c044.mockapi.io/api/MonAn';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setdata(resJson);
      });
  };

  const getAddFood = ind => {
    let tempData = addfood;
    if (tempData.length > 0) {
      let Old = false;
      tempData.map(item => {
        if (item.Name === data[ind].Name) {
          item.Quantity += 1;
          Old = true;
        }
      });
      if (!Old) {
        tempData.push(data[ind]);
      }
    } else {
      tempData.push(data[ind]);
    }
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setaddfood(temp);
  };
  const getDeleteFood = name => {
    const del = addfood.filter(item => item.Name !== name);
    setaddfood(del);
  };
  const Total = () => {
    let sum = 0;
    let tempData = addfood;
    tempData.map(item => {
      sum += item.Price * item.Quantity;
    });
    return sum;
  };
  const saveBill = async () => {
    let data = [];
    let data2 = await AsyncStorage.getItem('bills');
    if (data2 !== null) {
      let json = JSON.parse(data2);
      data = json;
    }
    let day = new Date().getDay() + 21;
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    data.push({
      data: addfood,
      nameTable: table,
      date: day + '/' + month + '/' + year,
      total: Total(),
    });
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem('bills', jsonData);
    navigation.navigate('Bill');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require('./Image/background.png')}>
        <View style={styles.V_header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Table');
            }}>
            <Image
              source={require('./Image/back.png')}
              style={styles.IMG_header}
            />
          </TouchableOpacity>
          <Text style={styles.T_header}>HOÁ ĐƠN</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVi(true);
            }}>
            <Image
              source={require('./Image/insert.png')}
              style={styles.IMG_header}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.V_table}>
          <Text style={styles.T_table}>{route.params.table}</Text>
        </View>
        <FlatList
          data={addfood}
          renderItem={({item, index}) => {
            return (
              <AddData
                item={item}
                index={index}
                onclick={ind => {
                  getDeleteFood(item.Name);
                }}
              />
            );
          }}
        />
        {addfood.length>0 && (
          <><View style={{ marginLeft: 10 }}>
            <Text style={styles.T_table}>
              Tổng tiền: <Text style={{ color: '#af4425' }}>{Total()}</Text>
            </Text>
          </View><View style={styles.V_payment}>
              <TouchableOpacity
                style={styles.Tou_payment}
                onPress={() => {
                  saveBill();
                } }>
                <Text style={styles.T_table}>Thanh toán</Text>
              </TouchableOpacity>
            </View></>
        )}
      </ImageBackground>

      {/* Menu */}
      <Modal transparent visible={ModalVi}>
        <ImageBackground
          style={styles.bg}
          source={require('./Image/background.png')}>
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
              <Text style={styles.T_header2}>Menu</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <Data
                    item={item}
                    index={index}
                    onclick={ind => {
                      setModalVi(false);
                      getAddFood(ind);
                    }}
                  />
                );
              }}
            />
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  V_header: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginTop: 25,
  },
  IMG_header1: {
    height: 70,
    width: 300,
  },
  T_header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  IMG_header: {
    height: 50,
    width: 50,
  },
  V_table: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  T_table: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
  V_payment: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Tou_payment: {
    height: 50,
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#af4425',
  },
  bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  V_Modal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  V_header2: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  T_header2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 110,
  },
});
