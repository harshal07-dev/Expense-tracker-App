// Modal screen
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORIES } from "../constant";
const Category = ({ navigation }) => {
  // ✅ Move this function *inside* so it can access `navigation`
  const handleSelectCategory = (category) => {
    console.log("Selected category pressed:", category);

    // Navigate to Create screen in BottomTabs
    navigation.popTo("BottomTabs", {
      screen: "Create",
      params: { category },
    });
  };

  const renderItem = ({ item }) => (
    <Pressable
      className="flex-1 items-center p-4 m-2 bg-pink-100 rounded-xl shadow-sm border border-gray-300"
      onPress={() => handleSelectCategory(item)}
    >
      <Text className="text-4xl">{item.icon}</Text>
      <Text className="mt-1 text-center text-sm font-medium text-gray-700">
        {item.name}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 mx-4">
      {/* Close button */}
      <Pressable onPress={() => navigation.goBack()}>
        <Text className="text-2xl font-bold p-3 mt-2">X</Text>
      </Pressable>

      {/* Title */}
      <Text className="text-3xl font-bold text-black mt-2">
        Select Category
      </Text>
      <Text className="text-base text-gray-500 mb-4 mt-2">
        Select a category that best describes what you spend money on
      </Text>

      {/* Scrollable FlatList */}
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({});
