import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import List from '@/components/its_match/list';
import { FreeTrial } from '@/components/its_match/freeTrial';

export default function Paywall() {
  return (
    <View style={styles.container}>
      <Link href='/' style={styles.icon}>
        <AntDesign name='left' size={35} color='pink' />
      </Link>
      <View>
        <Image
          source={require('../assets/images/match1.png')}
          style={styles.text}
        />
      </View>
      <List />
      <FreeTrial />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#040404',
  },
  icon: { paddingBottom: 50, marginRight: 285 },
  text: { height: 134 },
  list: {
    paddingTop: 52,
  },
  listItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  listIcon: { fontSize: 35 },
  listText: { color: 'white', fontSize: 25, marginLeft: 20, fontWeight: '400' },
  freeTrial: { paddingTop: 50, position: 'relative' },
  rizzGod: {
    position: 'absolute',
    backgroundColor: '#00A676',
    top: 40,
    zIndex: 20,
    left: 115,
    borderRadius: 50,
    width: 111,
    padding: 4,
  },
  rizzText: { fontSize: 15, color: 'white', textAlign: 'center' },
  mainBox: {
    padding: 27,
    width: 342,
    height: 200,
    backgroundColor: 'gray',
    alignItems: 'center',
    gap: 10,
    borderRadius: 40,
  },
  elevate: { color: '#46B1C9', fontSize: 30 },
  button: {
    backgroundColor: '#00A676',
    paddingHorizontal: 54,
    paddingVertical: 14,
    borderRadius: 40,
  },
  buttonText: { color: 'white' },
  risk: { color: 'white', fontSize: 15 },
});
