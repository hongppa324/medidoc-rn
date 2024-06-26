import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

export default function HomeScreen() {
  const onPressHospitalList = () => {
    // Add navigation or action here
  };

  const regions = [
    { name: "서울", image: require('@/assets/images/서울.png') },
    { name: "경기", image: require('@/assets/images/경기.png') },
    { name: "인천", image: require('@/assets/images/인천.png') },
    { name: "강원", image: require('@/assets/images/강원.png') },
    { name: "충청", image: require('@/assets/images/충청.png') },
    { name: "경상", image: require('@/assets/images/경상.png') },
    { name: "전라", image: require('@/assets/images/전라.png') },
    { name: "제주", image: require('@/assets/images/제주.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressHospitalList}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextSmall}>
                지금 나의 건강상태를 확인하세요
              </Text>
              <Text style={styles.buttonTextLarge}>병원 리스트 보러 가기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.regionContainer}>
          <Text style={styles.title}>지역별로 병원 찾기</Text>
          <View style={styles.regionButtonTextContainer}>
            {regions.map((region, index) => (
              <View key={index} style={styles.regionItem}>
                <Image
                  style={styles.regionImage}
                  source={region.image}
                />
                <Text>{region.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>내가 찾던 솔직한 후기</Text>
          <TouchableOpacity
            style={styles.totalViewButton}
            // onPress={/* Add navigation or action */}
          >
            <Text style={styles.totalViewButtonText}>전체 보기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>실시간 상담</Text>
          <TouchableOpacity
            style={styles.totalViewButton}
            // onPress={/* Add navigation or action */}
          >
            <Text style={styles.totalViewButtonText}>전체 보기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>내 건강은 지금 어떨까?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff"
  },
  scrollView: {
    marginHorizontal: 10
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  button: {
    backgroundColor: "#FFA500",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 370,
    height: 90
  },
  buttonTextContainer: {
    alignItems: 'center'
  },
  buttonTextSmall: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  buttonTextLarge: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },
  regionContainer: {
    marginBottom: 20
  },
  regionButtonTextContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  regionItem: {
    alignItems: "center",
    marginBottom: 10,
    width: (width - 40) / 4,
  },
  regionImage: {
    width: 40,
    height: 40
  },
  section: {
    marginBottom: 20
  },
  totalViewButton: {
    marginTop: 8,
    alignSelf: 'flex-end'
  },
  totalViewButtonText: {
    color: "#333",
    fontSize: 12
  }
});
