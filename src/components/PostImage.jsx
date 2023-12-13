import { TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';
export default function PostImage({ date, title, url, explanation, copyright }) {
  const { navigate } = useNavigation();
  const handlePress = () => {
    navigate('+ Info', { date, title, url, explanation, copyright });
  };
  return (
    <TouchableHighlight key={url} onPress={handlePress}>
      <Image source={{ uri: url }} style={styles.imgGallery} />
    </TouchableHighlight>
  );
}
