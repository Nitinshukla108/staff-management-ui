import React, { useState, useMemo } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, 
  TextInput, TouchableOpacity, LayoutAnimation, Modal, useWindowDimensions 
} from 'react-native';
import { Search, Plus, X, CheckCircle, Zap, Settings, User } from 'lucide-react-native';

const INITIAL_DATA = [
  { 
    id: '1', title: 'Mobile App Revamp', lead: 'Sneha K.', 
    team: [{name: 'Nitin Shukla'}], 
    status: 'Active', deadline: '2026-02-12', accent: '#3B82F6'
  },
];

const ProjectScreen = ({ route }) => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;
  const filterType = route?.params?.filterType || 'ALL';
  const LOGGED_IN_USER = "Nitin Shukla"; // Tera naam exact yahi hona chahiye

  const [allTasks, setAllTasks] = useState(INITIAL_DATA);
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Form States
  const [newTitle, setNewTitle] = useState('');
  const [newLead, setNewLead] = useState('');
  const [newSquad, setNewSquad] = useState(''); 

  // --- 1. FILTER LOGIC (FIXED) ---
  const displayedTasks = useMemo(() => {
    let list = [...allTasks];
    const myName = LOGGED_IN_USER.toLowerCase().trim();

    if (filterType === 'MY_TASKS') {
      list = allTasks.filter(t => {
        const isLead = t.lead?.toLowerCase().trim() === myName;
        // Squad check: Team array ke har object ka name check karo
        const isInSquad = t.team?.some(member => member.name?.toLowerCase().trim() === myName);
        return isLead || isInSquad;
      });
    }
    return list.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
  }, [allTasks, search, filterType]);

  const grouped = useMemo(() => ({
    active: displayedTasks.filter(t => t.status === 'Active'),
    review: displayedTasks.filter(t => t.status === 'In Review'),
    done: displayedTasks.filter(t => t.status === 'Completed'),
  }), [displayedTasks]);

  // --- 2. SAVE FUNCTION (FIXED) ---
  const handleSaveTask = () => {
    if (!newTitle || !newLead) return;

    // Squad input ko array of objects mein convert karna
    const squadArray = newSquad.split(',').map(n => ({ name: n.trim() })).filter(n => n.name !== "");
    
    // Naya task object
    const newTask = {
      id: Math.random().toString(),
      title: newTitle,
      lead: newLead,
      team: [{ name: newLead }, ...squadArray], // Lead aur Squad dono team mein jayenge
      status: 'Active',
      deadline: '2026-02-28',
      accent: '#3B82F6',
      priority: 'Medium'
    };

    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setAllTasks([newTask, ...allTasks]);
    setShowAddModal(false);
    setNewTitle(''); setNewLead(''); setNewSquad('');
  };

  const Column = ({ title, data, color, icon }) => (
    <View style={[styles.column, isMobile && { width: windowWidth - 40, marginRight: 0, marginBottom: 20 }]}>
      <View style={styles.colHeader}>
        <View style={[styles.iconBox, { backgroundColor: color + '15' }]}>{icon}</View>
        <Text style={styles.colTitle}>{title}</Text>
        <Text style={styles.count}>{data.length}</Text>
      </View>
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.cardFooter}>
            <User size={12} color="#94A3B8" />
            <Text style={styles.leadName}>{item.lead}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{filterType === 'MY_TASKS' ? 'My Tasks' : 'All Projects'}</Text>
        <View style={styles.headerRight}>
          <TextInput placeholder="Search..." style={styles.search} value={search} onChangeText={setSearch} />
          {filterType === 'ALL' && (
            <TouchableOpacity style={styles.addBtn} onPress={() => setShowAddModal(true)}><Plus size={20} color="#FFF" /></TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView horizontal={!isMobile} contentContainerStyle={{ padding: 20 }}>
        <Column title="ACTIVE" data={grouped.active} color="#3B82F6" icon={<Zap size={16} color="#3B82F6" />} />
        <Column title="REVIEW" data={grouped.review} color="#6366F1" icon={<Settings size={16} color="#6366F1" />} />
        <Column title="DONE" data={grouped.done} color="#10B981" icon={<CheckCircle size={16} color="#10B981" />} />
      </ScrollView>

      <Modal visible={showAddModal} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Add Project</Text>
            <TextInput style={styles.input} placeholder="Title" value={newTitle} onChangeText={setNewTitle} />
            <TextInput style={styles.input} placeholder="Lead Name" value={newLead} onChangeText={setNewLead} />
            <TextInput style={styles.input} placeholder="Squad (e.g. Nitin Shukla, Rahul)" value={newSquad} onChangeText={setNewSquad} />
            <TouchableOpacity style={styles.saveBtn} onPress={handleSaveTask}><Text style={{color: '#FFF', fontWeight: 'bold'}}>Save</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setShowAddModal(false)} style={{marginTop: 10}}><Text>Cancel</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { padding: 20, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  headerRight: { flexDirection: 'row', gap: 10 },
  search: { backgroundColor: '#F1F5F9', paddingHorizontal: 10, borderRadius: 8, width: 120 },
  addBtn: { backgroundColor: '#3B82F6', padding: 10, borderRadius: 8 },
  column: { width: 280, marginRight: 20 },
  colHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
  colTitle: { fontWeight: 'bold', color: '#64748B', flex: 1 },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 10, elevation: 2 },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  cardFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 5 },
  leadName: { fontSize: 12, color: '#64748B' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modal: { width: 300, backgroundColor: '#FFF', padding: 20, borderRadius: 20, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { width: '100%', backgroundColor: '#F1F5F9', padding: 12, borderRadius: 10, marginBottom: 10 },
  saveBtn: { backgroundColor: '#3B82F6', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center' }
});

export default ProjectScreen;