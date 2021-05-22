import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
//import GestureHandler, { PinchGestureHandler } from 'react-native-gesture-handler';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const {height, width} = Dimensions.get('screen');
const Detail = ({route, navigation}) => {
  const item = route.params;
  // scale = new Animated.Value(1);

  // onPinchEvent = Animated.event([{ nativeEvent: { scale: this.scale } }], {
  //   useNativeDriver: true,
  // });

  // onPinchStateChange = (event) => {
  //   if (event.nativeEvent.oldState === GestureHandler.State.ACTIVE) {
  //     Animated.spring(this.scale, {
  //       toValue: 1,
  //       useNativeDriver: true,
  //       bounciness: 1,
  //     }).start();
  //   }
  // };
  logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    console.log('');
    console.log('');
    console.log('-------------');
    console.log('Event: ', event);
    console.log('GestureState: ', gestureState);
    console.log('ZoomableEventObject: ', zoomableViewEventObject);
    console.log('');
    console.log(
      `Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`,
    );
  };
  return (
    <View style={{flex: 1}}>
      {/* <PinchGestureHandler
          onGestureEvent={this.onPinchEvent}
          onHandlerStateChange={this.onPinchStateChange}
        > */}
      <ReactNativeZoomableView
        maxZoom={3}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
        onZoomAfter={this.logOutZoomState}
        style={{
          padding: 10,
          backgroundColor: 'red',
        }}>
        <Image 
        source ={item.img}
        resizeMode='cover'
        style  ={{
          width:width,
          height:height
        }}
        />
      </ReactNativeZoomableView>
      {/* </PinchGestureHandler> */}
      <View
        style={{
          position: 'absolute',
          marginTop: '50%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{color: 'red', fontSize: 30}}> Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Detail;
