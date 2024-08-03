import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Regular() {
  return (
    <View style={styles.container}>
      <Link href='/paywall'>
        <Text style={styles.text}>CUPID</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040404',
  },
  text: {
    color: '#ED217C',
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 52.05,
  },
});
