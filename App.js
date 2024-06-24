import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2, backgroundColor: 'white' , justifyContent: 'center',alignItems: 'center'}}>
       <Image styles={{width:120, height:160,}}
        source={require('./assets/lru.png')}
        />
        </View>
      <View style={{flex: 1, backgroundColor: 'darkorange'}}>
      <Text style={{fontSize: 24}}>มหาวิทยาลัยราชภัฎเลย</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;