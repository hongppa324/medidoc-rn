import {View, Text, TouchableOpacity, Button, Alert, SafeAreaView, ScrollView, StatusBar,StyleSheet} from 'react-native'
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {

  const onPressHospitalList = () => {};
  // const region = { 서울, 경기, 인천, 강원, 충청, 전라, 경상, 제주 };
  

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Call')}
        >
          <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonTextSmall}>지금 나의 건강상태를 확인하세요</Text>
        <Text style={styles.buttonTextLarge}>병원 리스트 보러 가기</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View >
      <Text style={styles.title}>지역별로 병원 찾기</Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <View style={styles.regionalHospitalContainer}>
      <Text style={styles.title}>내가 찾던 솔직한 후기</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.totalViewButton}
        // onPress={() => navigation.navigate('Call')}
        >
          <Text style={styles.totalViewButtonText}>전체 보기</Text>
      </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text style={styles.title}>실시간 상담</Text>
    </View>
    <View>
      <Text style={styles.title}>내 건강은 지금 어떨까?</Text>
    </View>
  </ScrollView>
  </SafeAreaView>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,

  }, 
  scrollView: {
    marginHorizontal: 10 // 양쪽 마진이 필요한지?
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  buttonTextContainer: {},
  
  button: {
    backgroundColor: '#FFA500', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 370,
    height: 90
  },
  buttonTextSmall: {
    color: '#fff', // 버튼 글자색상 추가
    fontSize: 12,
    fontWeight:
     'bold',
  },
  buttonTextLarge: {
    color: '#fff', // 버튼 글자색상 추가
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  totalViewButton : { 
    // marginBottom: 10,
    // width: 370,
    // height: 90
    backgroundColor: '#006600'
  },
  totalViewButtonText:{
    color: '#333',
    fontSize: 24,
  },
  regionalHospitalContainer: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#ffffff'
},
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
