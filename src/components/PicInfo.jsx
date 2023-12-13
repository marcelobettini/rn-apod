import { ActivityIndicator, ScrollView, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/styles';
import Header from './Header';


export default function PicInfo() {
  const { params: { date, title, url, explanation, copyright, media_type } } = useRoute();

  return (
    <>
      <Header />
      <View style={styles.container}>
        {!url ? (
          <View style={styles.imgLoader}>
            <ActivityIndicator />
          </View>)
          :
          (
            <Image style={styles.imgPicInfo} source={{ uri: url }}
            />
          )
        }
        <ScrollView>
          <Text style={styles.ttl}>{title} </Text>
          <Text style={styles.explanation}>{explanation} </Text>
          <Text>{date} </Text>
          <Text>{copyright} </Text>
          <Text>{media_type} </Text>
        </ScrollView>
      </View>
    </>
  );
}

