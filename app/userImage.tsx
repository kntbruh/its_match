import { Link } from 'expo-router';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign } from '@expo/vector-icons';
import { CopyRizzWindow, icons } from '@/components/its_match/CopyRizzWindow';

export default function UserImage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Link href={'/regular'}>
          <AntDesign name='left' size={35} color='black' />
        </Link>
        <View style={styles.textContainer}>
          <Text style={styles.text}>CUPID</Text>
          <Text style={styles.textRegular}>Regular</Text>
        </View>
        <Entypo name='back-in-time' size={40} color='black' />
      </View>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Text style={styles.textMain}>User's Screenshot</Text>
        </View>
      </View>
      <View style={styles.lineText}>
        <View style={styles.line} />
        <Text style={{ fontSize: 20 }}>👇 Tap to copy rizz 👇</Text>
        <View style={styles.line} />
      </View>
      <View>
        {icons.map((icon, index) => (
          <CopyRizzWindow key={index} icon={icon} />
        ))}
      </View>
    </ScrollView>
  );
}

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
  main: { paddingTop: 50, paddingHorizontal: 48 },
  textMain: {
    fontSize: 28,
    lineHeight: 33.41,
    textAlign: 'center',
  },
  imageContainer: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 523,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  lineText: {
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray', // или любой другой цвет
    marginHorizontal: 10, // расстояние между линией и текстом
  },
  buttons: { alignItems: 'center', flexDirection: 'row', gap: 20 },
  loveButton: { backgroundColor: 'black', padding: 20, borderRadius: 40 },
  textButton: { backgroundColor: 'black', padding: 20, borderRadius: 40 },
  buttonText: { color: 'white', fontSize: 28 },
});
