import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';

const { width } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'Custom Staff Management',
    desc: 'A comprehensive suite of tools that helps businesses optimize and grow by providing insights into staff behavior and tracking.',
    icon: '🏢',
  },
  {
    id: '2',
    title: 'Automated Payroll Systems',
    desc: 'Streamline your financial operations with automated salary calculations and secure payout distributions.',
    icon: '💸',
  },
  {
    id: '3',
    title: 'Digital Attendance Records',
    desc: 'Eliminate manual registers. Manage daily attendance and leave requests with our cloud-based tracking system.',
    icon: '📱',
  },
  {
    id: '4',
    title: 'Real-time Data Analytics',
    desc: 'Gain valuable insights into your workforce productivity with visual reports and performance metrics.',
    icon: '📊',
  },
  {
    id: '5',
    title: 'Compliance & Legal Security',
    desc: 'Stay ahead of regulations with built-in compliance tools designed for modern labor laws and business standards.',
    icon: '⚖️',
  },
  {
    id: '6',
    title: 'Seamless Team Collaboration',
    desc: 'Connect your management and staff on a single platform to improve communication and task management.',
    icon: '🤝',
  },
];

const WhatWeDo = () => {
  const scrollRef = useRef(null);
  const scrollX = useRef(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollX.current += 1;
        // Reset scroll when it reaches the end
        if (scrollX.current >= (DATA.length * 345) - (width * 0.5)) {
          scrollX.current = 0;
        }
        scrollRef.current.scrollTo({ x: scrollX.current, animated: false });
      }
    }, 20); // 20ms for smooth cinematic scroll

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>What We Do ↴</Text>
          <TouchableOpacity style={styles.aboutBtn}>
            <Text style={styles.aboutText}>About Us  ↗</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sideDesc}>Design, Develop And Run{"\n"}Any Business Software{"\n"}You Need.</Text>
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        scrollEnabled={true} // User can also manually scroll
      >
        {DATA.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.divider} />
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 80, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Platform.OS === 'web' ? '8%' : 20,
    marginBottom: 50,
    alignItems: 'flex-end',
  },
  title: { fontSize: Platform.OS === 'web' ? 56 : 38, fontWeight: '800', color: COLORS.textMain },
  aboutBtn: {
    borderWidth: 1,
    borderColor: COLORS.textMain,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  aboutText: { fontWeight: '700', fontSize: 14, textTransform: 'uppercase' },
  sideDesc: { color: COLORS.textSecondary, textAlign: 'right', fontSize: 15, lineHeight: 22 },
  scrollContent: { paddingLeft: Platform.OS === 'web' ? '8%' : 20, paddingRight: 50 },
  card: {
    width: 320,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    padding: 35,
    marginRight: 25,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },
  cardIcon: { fontSize: 45, marginBottom: 25 },
  cardTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary, marginBottom: 15 },
  divider: { width: 50, height: 3, backgroundColor: COLORS.textMain, marginBottom: 20 },
  cardDesc: { fontSize: 16, color: COLORS.textSecondary, lineHeight: 24 },
});

export default WhatWeDo;