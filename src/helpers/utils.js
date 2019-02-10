import { Dimensions } from 'react-native';

const iPhoneSize = () => {
  const windowWidth = Dimensions.get('window').width;
  if (windowWidth === 320) {
    return 'small'; // iPhone SE
  } if (windowWidth === 414) {
    return 'large'; // iPhone Plus
  }
  return 'medium'; // iPhone 6/7
};

export default iPhoneSize;
