import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image, Dimensions
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export default function HomeScreen() {
  const onPressHospitalList = () => {};
  // const region = { 서울, 경기, 인천, 강원, 충청, 전라, 경상, 제주 };
  const colors = []

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate('Call')}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextSmall}>
                지금 나의 건강상태를 확인하세요
              </Text>
              <Text style={styles.buttonTextLarge}>병원 리스트 보러 가기</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>지역별로 병원 찾기</Text>
          <TouchableOpacity
          // style={styles.regionButton}
          // onPress={() => navigation.navigate('Call')}
          >
            <View style={styles.regionButtonTextContainer}>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/서울.png`)}
                />
                <Text>서울</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/경기.png`)}
                />
                <Text>경기</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/인천.png`)}
                />
                <Text>인천</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/강원.png`)}
                />
                <Text>강원</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/충청.png`)}
                />
                <Text>충청</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/경상.png`)}
                />
                <Text>경상</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/전라.png`)}
                />
                <Text>전라</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 40,
                    height: 40
                  }}
                  source={require(`@/assets/images/제주.png`)}
                />
                <Text>제주</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>내가 찾던 솔직한 후기</Text>
          <View style={styles.totalViewButtonContainer}>
            <TouchableOpacity
              style={styles.totalViewButton}
              // onPress={() => navigation.navigate('Call')}
            >
              <Text style={styles.totalViewButtonText}>전체 보기</Text>
            </TouchableOpacity>
          </View>
          <View>
            <SwiperFlatList
              autoplay
              autoplayDelay={3}
              autoplayLoop
              index={3}
              showPagination
            >
              <View>
                <Text>1</Text>
              </View>
              <View>
                <Text>2</Text>
              </View>
              <View>
                <Text>3</Text>
              </View>
              <View>
                <Text>4</Text>
              </View>
            </SwiperFlatList>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>실시간 상담</Text>
          <View style={styles.totalViewButtonContainer}>
            <TouchableOpacity
              style={styles.totalViewButton}
              // onPress={() => navigation.navigate('Call')}
            >
              <Text style={styles.totalViewButtonText}>전체 보기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.title}>내 건강은 지금 어떨까?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff"
  },
  scrollView: {
    marginHorizontal: 10 // 양쪽 마진이 필요한지?
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10
  },
  buttonTextContainer: {
    flex: 1
  },
  regionButtonTextContainer: {
    flex: 1,
    flexDirection: "row"
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
    marginBottom: 30,
    color: "#333"
  },
  totalViewButtonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  totalViewButton: {
    marginTop: 8
  },
  totalViewButtonText: {
    color: "#333",
    fontSize: 12
  },
  regionalHospitalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

// const styles = StyleSheet.create({
//   button: {},
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
