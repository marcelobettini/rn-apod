import { Text, View, Image, ActivityIndicator, TouchableHighlight } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
export default function TodayImage({ date, title, url, explanation, copyright }) {

  const { navigate } = useNavigation();
  const handleTouch = () => navigate('+ Info', { date, title, url, explanation, copyright });
  return (
    <View style={styles.containerToday}>
      <View style={styles.imgLoader}>

        {!url ? (
          <ActivityIndicator size={'large'} />
        ) :
          (
            <TouchableHighlight onPress={handleTouch}>
              <Image source={{ uri: url }} style={styles.img} />
            </TouchableHighlight>
          )
        }
      </View>
      <Text style={styles.ttl}>{title}</Text>


    </View>
  );
}

