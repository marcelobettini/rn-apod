import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
//funciones para data fetching
import getData from '../hooks/getData';
import TodayImage from '../components/TodayImage';
import LastWeekImages from '../components/LastWeekImages';
import { styles } from '../styles/styles';
import { format, sub, subDays } from 'date-fns';
import Header from '../components/Header';

const Home = () => {
  const [todayImage, setTodayImage] = useState({});
  const [lastWeekImages, setLastWeekImages] = useState([]);
  useEffect(() => {
    const getDailyImage = async () => {
      try {
        const dailyImage = await getData();
        setTodayImage(dailyImage);
      } catch (err) {
        console.error(err);
      }
    };
    const getLastWeekImages = async () => {
      try {
        const date = new Date(); //today
        const end_date = format(subDays(date, 1), 'yyyy-MM-dd');
        const start_date = format(sub(date, { days: 6 }), 'yyyy-MM-dd');
        const lastWeekImages = await getData(`&start_date=${start_date}&end_date=${end_date}`);
        const filteredLastWeekImages = lastWeekImages.filter(img => img.media_type === 'image');
        setLastWeekImages(filteredLastWeekImages);
      } catch (err) {
        console.error(err);
      }
    };
    getDailyImage();
    getLastWeekImages();

  }, []);
  return (
    <>
      <Header />
      <View style={styles.container}>
        {
          todayImage.media_type === "image" ?
            <TodayImage {...todayImage} />
            :
            lastWeekImages.length ?
              <TodayImage {...lastWeekImages[lastWeekImages.length - 1]} />
              : <ActivityIndicator size={'large'} />
        }
        <LastWeekImages lastWeekImages={lastWeekImages} />
      </View>
    </>
  );
};


export default Home;



