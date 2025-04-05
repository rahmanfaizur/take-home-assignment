import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: 'CircularBook',
          fontSize: 14,
        },
        tabBarActiveTintColor: '#7B61FF',
        tabBarInactiveTintColor: '#83838A',
      }}>
      <Tabs.Screen
        name="collections"
        options={{
          title: 'COLLECTIONS',
        }}
      />
      <Tabs.Screen
        name="manageTags"
        options={{
          title: 'MANAGE TAGS',
        }}
      />
    </Tabs>
  );
}
