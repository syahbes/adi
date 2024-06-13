import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import LeftArrowButton from "@/components/LeftArrowButton";
import RightArrowButton from "@/components/RightArrowButton";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          // title: "Form",
          headerShown: true,
          headerLeft: () => <LeftArrowButton />,
          headerRight: () => <RightArrowButton />,
          headerTitle: () => <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>עמדת טעינה</Text>,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#000" },
          

          tabBarStyle: { display: "none" },
          
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "create" : "create-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
