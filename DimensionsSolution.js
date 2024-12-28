import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const DimensionsSolution = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
      setWindowHeight(window.height);
    });

    // Get initial dimensions
    const { width, height } = Dimensions.get('window');
    setWindowWidth(width);
    setWindowHeight(height);

    return () => subscription.remove();
  }, []);

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <Text>Width: {windowWidth}</Text>
      <Text>Height: {windowHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DimensionsSolution;