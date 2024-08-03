import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export const history = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Link href={'/regular'}>
          <AntDesign name='left' size={35} color='black' />
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC92C0',
    paddingHorizontal: 20,
  },
  textContainer: { alignItems: 'center' },
  text: {
    color: 'black',
    fontSize: 44,
    fontWeight: '700',
    lineHeight: 45.8,
  },
  textRegular: { textAlign: 'center', fontSize: 25 },

  topBar: {
    flexDirection: 'row',
    paddingTop: 73,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});
