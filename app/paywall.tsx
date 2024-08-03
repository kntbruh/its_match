import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export default function Paywall() {
  return (
    <View style={styles.container}>
      <Link href='/' style={styles.icon}>
        <AntDesign name='left' size={35} color='pink' />
      </Link>
      <View>
        <Text style={styles.text}>IT'S A MATCH!</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>🔥</Text>
          <Text style={styles.listText}>Unlimited Rizz</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>🤝</Text>
          <Text style={styles.listText}>Trusted by Millions</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>❤️‍🔥</Text>
          <Text style={styles.listText}>Coach Recommended</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>🍯</Text>
          <Text style={styles.listText}>Proven to Get Dates</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>📈</Text>
          <Text style={styles.listText}>x10 More Responses</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listIcon}>😈</Text>
          <Text style={styles.listText}>x8 More Dates</Text>
        </View>
      </View>
      <View style={styles.freeTrial}>
        <View style={styles.rizzGod}>
          <Text style={styles.rizzText}>Rizz God</Text>
        </View>
        <View style={styles.mainBox}>
          <View>
            <Text style={styles.elevate}>Elevate Your Game</Text>
          </View>
          <Link href='/regular' style={styles.button}>
            <Text style={styles.buttonText}>Unlock Free Trial</Text>
          </Link>
          <View>
            <Text style={styles.risk}>risk-free trial then $8.67/week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 44,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#040404',
  },
  icon: { paddingBottom: 50, marginRight: 280 },
  text: {
    color: '#ED217C',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 52.05,
  },
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
