import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >IMAGEN</Text>
            <Image 
                source={{ uri: 'https://piziadas.com/wp-content/uploads/2017/11/primitivas0001.png' }}
                style={{
                    width: 200,
                    height: 200,
                    alignSelf: "center",
                    marginTop: 20
                }}
            />
            <TouchableOpacity
                    onPress={() => navigation.navigate("Stack")}
                    style={{
                        backgroundColor: "blue",
                        padding:10,
                        margingTop:"20%",
                        width: "50%",
                        alignSelf:"center",
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "white",
                        }}
                    >BOTONES</Text>
                </TouchableOpacity>
        </View>
    );
    }

export default SettingsScreen;