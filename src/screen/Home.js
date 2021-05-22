import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';

const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('screen');
  const [dataImage, setDataImage] = React.useState([
    {
      id: 1,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bfaf0a42789426aef1_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525281%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 2,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bf1e21c70142eb887a_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 3,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f1cff2c050ee9d906_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%2525281%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 4,
      img: {
        uri: 'https://image-us.24h.com.vn/upload/1-2020/images/2020-03-16/1584324285-90-anh-2-1584088794-width650height867.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 5,
      img: {
        uri: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-19.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 6,
      img: {
        uri: 'https://image.thanhnien.vn/1024/uploaded/nhith/2020_09_18/nongbong_rdup.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 7,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f8eb942a554602935_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%25252814%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 8,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585af0a4265d2250a91_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%25252816%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 9,
      img: {
        uri: 'https://i.pinimg.com/474x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 10,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585a7e7827db02f1d0c_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 11,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bfaf0a42789426aef1_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525281%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id:12,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bf1e21c70142eb887a_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 13,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f1cff2c050ee9d906_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%2525281%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id:14,
      img: {
        uri: 'https://image-us.24h.com.vn/upload/1-2020/images/2020-03-16/1584324285-90-anh-2-1584088794-width650height867.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 15,
      img: {
        uri: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-19.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 16,
      img: {
        uri: 'https://image.thanhnien.vn/1024/uploaded/nhith/2020_09_18/nongbong_rdup.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 17,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f8eb942a554602935_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%25252814%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 18,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585af0a4265d2250a91_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%25252816%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 19,
      img: {
        uri: 'https://i.pinimg.com/474x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 20,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585a7e7827db02f1d0c_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 21,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bfaf0a42789426aef1_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525281%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id:22,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bf1e21c70142eb887a_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 23,
      img: {
        uri: 'https://image.thanhnien.vn/1024/uploaded/nhith/2020_09_18/nongbong_rdup.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 24,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f8eb942a554602935_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%25252814%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 25,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585af0a4265d2250a91_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%25252816%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 26,
      img: {
        uri: 'https://i.pinimg.com/474x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 27,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585a7e7827db02f1d0c_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 28,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bfaf0a42789426aef1_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525281%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 29,
      img: {
        uri: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-19.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 30,
      img: {
        uri: 'https://image.thanhnien.vn/1024/uploaded/nhith/2020_09_18/nongbong_rdup.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 31,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f8eb942a554602935_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%25252814%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 32,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585af0a4265d2250a91_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%25252816%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 33,
      img: {
        uri: 'https://i.pinimg.com/474x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 34,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585a7e7827db02f1d0c_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 35,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bfaf0a42789426aef1_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525281%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id:36,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bf1e21c70142eb887a_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 37,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f1cff2c050ee9d906_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%2525281%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id:38,
      img: {
        uri: 'https://image-us.24h.com.vn/upload/1-2020/images/2020-03-16/1584324285-90-anh-2-1584088794-width650height867.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 39,
      img: {
        uri: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-19.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 40,
      img: {
        uri: 'https://image.thanhnien.vn/1024/uploaded/nhith/2020_09_18/nongbong_rdup.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 41,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f8eb942a554602935_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%25252814%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 42,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a585af0a4265d2250a91_Emxinh2k__chiem-nguong-bo-anh-hot-girl-gai-xinh-thai-lan-goi-cam%252B%25252816%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 43,
      img: {
        uri: 'https://i.pinimg.com/474x/0d/7d/b0/0d7db08b7a4a5e31c2f8bfb353b0a882.jpg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 44,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bfaf0a42789426aef1_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525281%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 45,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/606916bf1e21c70142eb887a_GaiHot2k__anh-gai-xinh-de-thuong-viet-nam%252B%2525282%252529.jpeg',
      },
      name: 'Gai Xinh',
    },
    {
      id: 46,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f1cff2c050ee9d906_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%2525281%252529.jpeg',
      },
      name: 'Gai xinh',
    },
    {
      id: 47,
      img: {
        uri: 'https://image-us.24h.com.vn/upload/1-2020/images/2020-03-16/1584324285-90-anh-2-1584088794-width650height867.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 48,
      img: {
        uri: 'https://ruthamcauquan2.info/wp-content/uploads/2020/07/anh-gai-xinh-hap-dan-nhieu-nam-gioi-19.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 49,
      img: {
        uri: 'https://image.thanhnien.vn/1024/uploaded/nhith/2020_09_18/nongbong_rdup.jpg',
      },
      name: 'Gai xinh',
    },
    {
      id: 50,
      img: {
        uri: 'https://uploads-ssl.webflow.com/5f5f2b58b1af780151375838/6068a61f8eb942a554602935_GaiHot2k__hinh-anh-girl-xinh-gai-dep-thai-lan%252B%25252814%252529.jpeg',
      },
      name: 'Gai xinh',
    },
  ]);
  function renderTitle() {
    return (
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 30}}>ShowIamge</Text>
      </View>
    );
  }
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        onPress ={() =>{
          navigation.navigate('Detail', item)
        }}
         >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: width / 2,
              height: height / 2,
              borderRadius:10
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      {renderTitle()}
      <View style={{flex: 1}}>
        <FlatList
          data={dataImage}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod ={50}
          numColumns={2}
        />
      </View>
    </View>
  );
};
export default Home;
