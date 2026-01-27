// import React, { useEffect, useRef } from 'react';
// import { StyleSheet, Text, View, ScrollView, Animated, Platform, Dimensions } from 'react-native';
// import { COLORS } from '../constants/Colors';

// const { width } = Dimensions.get('window');

// // Hypothetical SME Business Names (Logos ki jagah text use kar rahe hain for now)
// const LOGOS = [
//   "Global Logistics", "Surat Textiles", "Apex Solutions", 
//   "Modern Retail", "Prime Pharma", "Tech Hub", "Bright Hotels"
// ];

// const TrustedBy = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Infinite animation logic
//     const startAnimation = () => {
//       scrollX.setValue(0);
//       Animated.timing(scrollX, {
//         toValue: -1000, // Move to the left
//         duration: 20000, // Speed of movement (20 seconds)
//         useNativeDriver: Platform.OS !== 'web', // Native driver for smooth performance
//       }).start(() => startAnimation()); // Loop it
//     };

//     startAnimation();
//   }, [scrollX]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>TRUSTED BY 500+ FORWARD-THINKING SMES</Text>
      
//       <View style={styles.sliderWrapper}>
//         <Animated.View 
//           style={[
//             styles.logoTrack, 
//             { transform: [{ translateX: scrollX }] }
//           ]}
//         >
//           {/* Duplicate logos for infinite loop feel */}
//           {[...LOGOS, ...LOGOS, ...LOGOS].map((item, index) => (
//             <View key={index} style={styles.logoItem}>
//               <Text style={styles.logoText}>{item}</Text>
//             </View>
//           ))}
//         </Animated.View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F1F5F9', // Halka grey background
//     paddingVertical: 40,
//     width: '100%',
//     overflow: 'hidden',
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: '#E2E8F0',
//   },
//   title: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#64748b',
//     textAlign: 'center',
//     letterSpacing: 2,
//     marginBottom: 25,
//     textTransform: 'uppercase',
//   },
//   sliderWrapper: {
//     flexDirection: 'row',
//     width: '100%',
//   },
//   logoTrack: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logoItem: {
//     marginHorizontal: 40,
//     paddingHorizontal: 15,
//   },
//   logoText: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#94a3b8', // Subtle grey for a professional look
//     letterSpacing: 1,
//   },
// });

// export default TrustedBy;