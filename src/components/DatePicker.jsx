import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ActivityIndicator, Text, View, ScrollView, Image, Button } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Header from './Header';
import { useState } from 'react';
import { format } from 'date-fns';
import getData from '../hooks/getData';

export default function DatePicker() {
  const [isVisible, setIsVisible] = useState(true);
  const [postImage, setPostImage] = useState({});
  const isPost = Boolean(Object.keys(postImage).length);
  const { title, date, url, explanation, copyright } = postImage;

  const getPic = async (date) => {
    const res = await getData(`&date=${date}`);
    setPostImage(res);
  };

  const handleDatePick = (e, date) => {
    setIsVisible(false);
    getPic(format(new Date(date), 'yyyy-MM-dd'));
  };

  return (
    <>
      <Header></Header>

      <FontAwesome5 name="calendar-alt" size={24} color="black" onPress={() => setIsVisible(true)}
        style={{ position: 'absolute', top: 10, marginLeft: '50%', }} />

      {isVisible &&
        <View>
          <RNDateTimePicker
            display='calendar'
            mode="date"
            value={new Date()}
            minimumDate={new Date('1995-06-16')}
            maximumDate={new Date()}
            onChange={(e, date) => handleDatePick(e, date)}
          />
        </View>
      }
      {
        !isVisible && <ScrollView>
          {!isPost && <ActivityIndicator size={'large'} />}

          {isPost && postImage?.media_type !== "image" ? (
            <>
              <Text>No photo for this date.</Text>
              <Text>Try another.</Text>
            </>
          ) : (
            <>
              <Text style={styles.ttl}>{title}</Text>
              <ScrollView>
                <Image source={{ uri: url }} style={styles.img} />
                <Text style={styles.explanation}>{explanation}</Text>
                <Text>{copyright}</Text>
                <Text>{date}</Text>
              </ScrollView>
            </>
          )}


        </ScrollView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 20,
  },
  ttl: {
    color: 'rgb(132, 123, 246)',
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  img: {
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgLoader: { height: 300, justifyContent: 'center' },

  explanation: {
    marginVertical: 10,
    fontSize: 16,
  },
});

