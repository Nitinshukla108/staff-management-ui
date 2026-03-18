import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { 
  LayoutDashboard, CalendarCheck, Briefcase, 
  Wallet, Settings, LogOut, ClipboardCheck, User 
} from 'lucide-react-native';

// Screen Import
import ProjectScreen from '../screens/ProjectScreen'; 

const Drawer = createDrawerNavigator();

const CustomSidebar = (props) => (
  <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: '#0F172A' }}>
    <View style={styles.profileArea}>
      <View style={styles.avatarCircle}><User color="#FFF" size={24} /></View>
      <View>
        <Text style={styles.profileName}>Nitin Shukla</Text>
        <Text style={styles.profileRole}>Admin | Staff-PE</Text>
      </View>
    </View>
    <View style={styles.divider} />
    <View style={{ flex: 1, marginTop: 10 }}><DrawerItemList {...props} /></View>
    <View style={styles.sidebarFooter}>
      <TouchableOpacity style={styles.logoutBtn}>
        <LogOut size={20} color="#FDA4AF" /><Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebar {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: 'StaffPe Admin',
        headerStyle: { backgroundColor: '#FFF', elevation: 0 },
        drawerActiveBackgroundColor: 'rgba(59, 130, 246, 0.15)',
        drawerActiveTintColor: '#3B82F6',
        drawerInactiveTintColor: '#94A3B8',
        drawerLabelStyle: { fontWeight: '700', marginLeft: -10 },
      }}
    >
      <Drawer.Screen name="Dashboard" component={View} options={{ drawerIcon: ({color}) => <LayoutDashboard color={color} size={20} /> }} />
      
      <Drawer.Screen 
        name="All Projects" 
        component={ProjectScreen} 
        initialParams={{ filterType: 'ALL' }}
        options={{ drawerIcon: ({color}) => <Briefcase color={color} size={20} /> }} 
      />

      <Drawer.Screen 
        name="My Tasks" 
        component={ProjectScreen} 
        initialParams={{ filterType: 'MY_TASKS' }}
        options={{ drawerIcon: ({color}) => <ClipboardCheck color={color} size={20} /> }} 
      />

      <Drawer.Screen name="Attendance" component={View} options={{ drawerIcon: ({color}) => <CalendarCheck color={color} size={20} /> }} />
      <Drawer.Screen name="Salary" component={View} options={{ drawerIcon: ({color}) => <Wallet color={color} size={20} /> }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  profileArea: { padding: 25, flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 20 },
  avatarCircle: { width: 45, height: 45, borderRadius: 23, backgroundColor: '#1E293B', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
  profileName: { color: '#F8FAFC', fontSize: 16, fontWeight: '800' },
  profileRole: { color: '#94A3B8', fontSize: 12, fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#1E293B', marginHorizontal: 20 },
  sidebarFooter: { padding: 20, borderTopWidth: 1, borderTopColor: '#1E293B' },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
  logoutText: { color: '#FDA4AF', fontWeight: '800', fontSize: 14 }
});