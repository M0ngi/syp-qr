import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { addParticipant } from "../services/firestore";

export default function AddParticipantScreen() {
    const [hasPermission, setHasPermission] = useState(false);
    const [prevID, setPrevID] = useState("");
    const [idInputValue, setIdInputValue] = useState("");
    const route = useRoute();
    const { workshop_id } : any  = route.params;

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const addParticipantID = (id: string)=>{
        addParticipant(workshop_id, id);
    }

    const handleBarCodeScanned = async ({ type, data } : {type: any; data:any}) => {
        if(type !== 256) return;

        if(!data){
            console.log("invalid");
            return;
        }
        const id = data as string;
        if(id.length == 8 && id != prevID){
            setIdInputValue(id);
            setPrevID(id);
        }
    };
  
    if (hasPermission === null) {
      return <View style={styles.errorContainer}>
          <Text>Requesting for camera permission</Text>
      </View>;
    }
    if (hasPermission === false) {
      return <View style={styles.errorContainer}>
          <Text>No access to camera</Text>
      </View>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={styles.cameraView}
            />

            <View style={styles.manualInputArea}>
                <Text style={styles.inputLabel}>IEEE ID:</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    value={idInputValue}
                    maxLength={8}
                    onChangeText={(value)=>{
                        if(value.length == 8){
                            
                        }
                        setIdInputValue(value);
                    }}
                />
            </View>
            <Pressable onPress={()=>{
                if(idInputValue.length == 8){
                    addParticipantID(idInputValue);
                    setIdInputValue("")
                }
            }}>
                <Text style={styles.button}>Press here to add!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: Layout.window.width,
        height: Layout.window.height,
        paddingTop: 100,
    },
    errorContainer:{
        marginTop: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Layout.window.height - 100 - 100
    },
    button: {
        marginBottom: 20,
        marginTop: 30,
        alignSelf: "center",
        //fontFamily: "futura",
        letterSpacing: 1,
        borderColor: Colors["backgroundColor"],
        color: Colors["backgroundColor"],
        borderRadius: 4,
        textAlign: "center",
        paddingVertical: 7,
        borderWidth: 2,
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors["primaryColor"],
    },
    cameraView:{
        width: "100%",
        height: "50%",
        backgroundColor: "#000"
    },
    manualInputArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 40,
        marginTop: 40,
        width: Layout.window.width - 40 - 40,
    },
    inputLabel: {
        fontSize: 19,
        letterSpacing: 0.5,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: Layout.window.width - 40 - 40 - 100,
        borderRadius: 20
    },
    resultsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginLeft: 40,
        width: Layout.window.width - 40 - 40,
    },
    resultsText: {
        marginLeft: 20
    },
});
