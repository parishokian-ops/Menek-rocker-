import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

const MenekRockerUlos = () => {
  return (
    <View style={styles.container}>
      {/* Header dengan Motif Ulos Sadum (Warna Merah-Emas) */}
      <View style={styles.ulosHeader}>
        <Text style={styles.logo}>MENEK ROCKER</Text>
        <View style={styles.rambuHeader} /> {/* Rumbai-rumbai header */}
      </View>

      <ScrollView style={styles.feed}>
        {/* Postingan dengan Border Motif Ulos */}
        <View style={styles.postContainer}>
          <View style={styles.ulosSidebar} /> {/* Garis vertikal motif ulos di samping post */}
          
          <View style={styles.postBody}>
            <View style={styles.userRow}>
              <View style={styles.avatarCircular}>
                 <View style={styles.avatarInner} />
              </View>
              <View>
                <Text style={styles.username}>Amani Rocker Situmorang</Text>
                <Text style={styles.rankText}>🎗️ Pemegang Ulos Ragidup</Text>
              </View>
            </View>

            <Text style={styles.content}>
              "Gitar boleh distorsi, tapi adat tetap di hati. 
              Malam ini kita jamming Gondang Rock di Lapangan Parapat! 🤘🥁"
            </Text>

            {/* Tombol Mangulosi (Ganti Like) */}
            <TouchableOpacity style={styles.mangulosiBtn}>
              <Text style={styles.mangulosiText}>🧣 MANGULOSI (Give Honor)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Navigasi Bawah Motif Tenun */}
      <View style={styles.ulosNavbar}>
        <Text style={styles.navItemActive}>Alaman</Text>
        <Text style={styles.navItem}>Punguan</Text>
        <Text style={styles.navItem}>Hata-hata</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0D0D' },
  
  // Header Style
  ulosHeader: { 
    paddingTop: 50, 
    backgroundColor: '#8B0000', 
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D4AF37' // Warna Benang Emas
  },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#FFF', letterSpacing: 5 },
  rambuHeader: { height: 10, width: '100%', backgroundColor: '#000', opacity: 0.3 }, // Efek rumbai

  feed: { padding: 10 },

  // Post Style
  postContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#1A1A1A', 
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333'
  },
  ulosSidebar: { 
    width: 8, 
    backgroundColor: '#8B0000', 
    // Di sini nanti bisa ditaruh pattern geometris putih-hitam
    borderRightWidth: 2,
    borderRightColor: '#FFF'
  },
  postBody: { flex: 1, padding: 15 },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatarCircular: { 
    width: 40, height: 40, borderRadius: 20, 
    borderWidth: 2, borderColor: '#D4AF37', padding: 2 
  },
  avatarInner: { flex: 1, backgroundColor: '#555', borderRadius: 20 },
  username: { color: '#FFF', fontWeight: 'bold', marginLeft: 10 },
  rankText: { color: '#D4AF37', fontSize: 10, marginLeft: 10 },
  content: { color: '#E0E0E0', fontSize: 14, lineHeight: 20 },

  // Tombol Spesial
  mangulosiBtn: { 
    marginTop: 15, 
    padding: 10, 
    backgroundColor: '#333', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B0000'
  },
  mangulosiText: { color: '#FF4136', fontWeight: 'bold', fontSize: 12 },

  // Navbar
  ulosNavbar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 15, 
    backgroundColor: '#8B0000',
    borderTopWidth: 2,
    borderTopColor: '#D4AF37'
  },
  navItem: { color: '#F0F0F0', fontSize: 12, fontWeight: '500' },
  navItemActive: { color: '#D4AF37', fontSize: 12, fontWeight: '900' }
});

export default MenekRockerUlos;