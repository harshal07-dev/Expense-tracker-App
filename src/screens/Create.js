import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabRouter } from "@react-navigation/native";

const Create = ({ navigation, route }) => {
  const [amount, setAmount] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({});

  React.useEffect(() => {
    if (route.params?.category) {
      console.log("paramas", route.params?.category);
      setCategory(route.params?.category);
    }
  });

  const handleExpense = () => {
    if (!amount || !title || !category) {
      console.log("All fields are mandatory");
      Alert.alert("All fiedls are mandatory");
      return;
    }
    console.log("amount", amount);
    console.log("title", title);
    console.log("category", category.name);
  };
  const handleCategoryInput = () => {
    console.log("Pressed");
    navigation.navigate("Category");
  };
  return (
    <SafeAreaView className="mx-3">
      <ScrollView contentContainerStyle={{ padding: 9 }}>
        {/* header section  */}
        <Text className="text-3xl font-bold italic">Add new expenses</Text>
        <Text className="text-base text-gray-500  mt-2 mb-8">
          Enter the details of your expenses to help you track your spending .
        </Text>
        {/* expense form section  */}
        <View className="mb-5">
          <Text className="text-lg font-bold text-gray-600 mb-2">
            Enter Amount
          </Text>
          <TextInput
            placeholder=" ₹0.00"
            className="border-2 border-gray-300 rounded-xl p-4 text-lg"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View className="mb-5">
          <Text className="text-lg font-bold text-gray-600">Title</Text>
          <TextInput
            placeholder="What was this for?"
            className="border-2 border-gray-300 rounded-xl p-4 text-lg"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View className="mb-5">
          <Text className="text-lg font-bold text-gray-600 mb-2">Category</Text>
          <Pressable
            className="border border-gray-300 p-4 rounded-xl flex-row justify-between items-center"
            onPress={handleCategoryInput}
          >
            <View className="flex-row items-center">
              <Text className="text-2xl mr-3">{category.icon || "🍔"}</Text>
              <Text className="text-lg">{category.name || "Food"}</Text>
            </View>
            <Text className="">&gt;</Text>
          </Pressable>
        </View>
        {/* footer section  */}
        <Pressable className="bg-black p-5 rounded-2xl" onPress={handleExpense}>
          <Text className="text-white text-center text-xl font-bold">
            Add Expense
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
