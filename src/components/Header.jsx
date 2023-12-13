import { Text, Image, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.heading}>APOD</Text>
      <Image style={styles.logo} source={require('../../assets/nasa_logo.png')} />
    </View>
  );
}

