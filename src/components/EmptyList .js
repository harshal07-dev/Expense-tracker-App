import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyList = ({
  title = "Not expenses yet",
  message = "Add new expense to see in your list",
}) => {
  return (
    <View className="flex-1 justify-center items-center p-8 mt-10">
      <Text className="text-5xl mb-3">📝</Text>
      <Text className="text-2xl font-semibold">{title}</Text>
      <Text className="text-gray-500">{message}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});
