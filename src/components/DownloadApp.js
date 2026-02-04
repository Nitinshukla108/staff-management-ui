import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';
import { Download, CheckCircle, Users, Clock } from 'lucide-react-native';

const DownloadApp = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  return (
    <View style={[styles.container, { paddingVertical: isMobile ? 50 : 100 }]}>
      <View style={[
        styles.contentWrapper, 
        { flexDirection: isMobile ? 'column' : 'row' }
      ]}>
        
        {/* Left Side: Text Content */}
        <View style={[
          styles.textContent, 
          { alignItems: isMobile ? 'center' : 'flex-start', paddingRight: isMobile ? 0 : 50 }
        ]}>
          {/* OVERLAP FIX: Added lineHeight and adjusted fontSize */}
          <Text style={[
            styles.title, 
            { 
              fontSize: isMobile ? 28 : 42, 
              textAlign: isMobile ? 'center' : 'left',
              lineHeight: isMobile ? 36 : 52 
            }
          ]}>
            Download the StaffPe App
          </Text>
          
          <Text style={[
            styles.description, 
            { textAlign: isMobile ? 'center' : 'left' }
          ]}>
            Manage your staff attendance, payroll, and performance on the go. 
            Available for both Android and iOS.
          </Text>
          
          {/* Features List */}
          <View style={[styles.featureList, { alignItems: isMobile ? 'center' : 'flex-start' }]}>
            {['Real-time tracking', 'Offline support', 'Instant Notifications'].map((item, index) => (
              <View key={index} style={styles.featureItem}>
                <CheckCircle size={18} color={COLORS.primary || '#3B82F6'} />
                <Text style={styles.featureText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Button Row Fix: Full width on mobile */}
          <View style={[styles.btnRow, { width: isMobile ? '100%' : 'auto' }]}>
            <TouchableOpacity style={[styles.downloadBtn, isMobile && { flex: 1 }]}>
              <Download size={18} color="#FFF" />
              <Text style={styles.btnText}>Play Store</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.downloadBtn, styles.iosBtn, isMobile && { flex: 1 }]}>
              <Download size={18} color="#1E293B" />
              <Text style={[styles.btnText, {color: '#1E293B'}]}>App Store</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Right Side: PHONE MOCKUP (Visible on Tablet/Desktop) */}
        {!isMobile && (
          <View style={styles.phoneContainer}>
            <View style={styles.phoneFrame}>
              <View style={styles.notch} />
              <View style={styles.appScreen}>
                <View style={styles.appHeader}>
                  <Text style={styles.appLogo}>Staff<Text style={{color: '#000'}}>Pe</Text></Text>
                  <View style={styles.avatar} />
                </View>
                <View style={styles.appStatsRow}>
                  <View style={styles.statBox}><Text style={styles.statNum}>42</Text></View>
                  <View style={styles.statBox}><Text style={styles.statNum}>38</Text></View>
                </View>
                <View style={styles.staffCard} />
                <View style={styles.staffCard} />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#F8FAFC', width: '100%', alignItems: 'center' },
  contentWrapper: { 
    maxWidth: 1100, 
    width: '90%', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  textContent: { flex: 1, width: '100%' },
  title: { 
    fontWeight: '900', 
    color: '#1E293B', 
    marginBottom: 15,
  },
  description: { 
    fontSize: 16, 
    color: '#64748B', 
    lineHeight: 24, 
    marginBottom: 25 
  },
  featureList: { marginBottom: 30, width: '100%' },
  featureItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  featureText: { 
    fontSize: 15, 
    color: '#475569', 
    marginLeft: 10, 
    fontWeight: '600' 
  },
  btnRow: { 
    flexDirection: 'row', 
    gap: 12, 
    justifyContent: 'flex-start' 
  },
  downloadBtn: { 
    backgroundColor: COLORS.primary || '#3B82F6', 
    paddingVertical: 12, 
    paddingHorizontal: 15, 
    borderRadius: 10, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 8 
  },
  iosBtn: { 
    backgroundColor: '#FFF', 
    borderWidth: 1, 
    borderColor: '#E2E8F0' 
  },
  btnText: { color: '#FFF', fontWeight: '800', fontSize: 13 },

  phoneContainer: { width: 300, alignItems: 'flex-end' },
  phoneFrame: { 
    width: 250, height: 500, backgroundColor: '#1E293B', borderRadius: 35, 
    padding: 8, borderWidth: 6, borderColor: '#334155' 
  },
  notch: { 
    width: 100, height: 18, backgroundColor: '#334155', 
    alignSelf: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 
  },
  appScreen: { flex: 1, backgroundColor: '#FFF', borderRadius: 22, padding: 10 },
  appHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  appLogo: { fontWeight: '900', color: '#3B82F6' },
  avatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#E2E8F0' },
  appStatsRow: { flexDirection: 'row', gap: 10, marginBottom: 15 },
  statBox: { flex: 1, height: 40, backgroundColor: '#F1F5F9', borderRadius: 8 },
  staffCard: { height: 35, backgroundColor: '#F8FAFC', borderRadius: 6, marginBottom: 8, borderWidth: 1, borderColor: '#F1F5F9' }
});

export default DownloadApp;