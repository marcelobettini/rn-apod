import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import PostImage from './PostImage';


export default function LastWeekImages({ lastWeekImages }) {

  return (
    <View style={styles.containerGallery}>
      <Text style={[styles.ttl, styles.center, styles.mb10]}>Last Week Images</Text>
      <ScrollView horizontal style={styles.content}>
        {lastWeekImages?.map(post =>
          <PostImage {...post} key={post.date} />
        )}
      </ScrollView>
    </View>
  );
}