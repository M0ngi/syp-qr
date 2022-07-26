import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import Layout from "../constants/Layout";
import VerifiedIcon from "../assets/Icons/VerifiedIcon";
import NotAllowedIcon from "../assets/Icons/NotAllowedIcon";
import Colors from "../constants/Colors";
import { addParticipant } from "../services/firestore";
import { QRVerifierProps } from "../types";


export default function QRVerifierScreen() {
    const route = useRoute();
    const { workshop_id, participants } : any  = route.params;
    const [hasPermission, setHasPermission] = useState(false);
    const navigation = useNavigation();
    const [idInputValue, setIdInputValue] = useState("");
    const [prevID, setPrevID] = useState("");
    const [idCheckResult, setIdCheckResult] = useState(false);
    const [participantsList, setParticipantsList] = useState(participants as string[]);
    
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    const checkParticipantID = (id:string)=>{
        setIdCheckResult(participantsList.indexOf(id) !== -1)
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
            checkParticipantID(id);
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
                        checkParticipantID(value);
                        
                    }
                    setIdInputValue(value);
                }}
            />
        </View>

        {idInputValue.length == 8 && <View style={styles.resultsRow}>
                {
                    idCheckResult ? <VerifiedIcon /> : <NotAllowedIcon />
                }
                <Text style={styles.resultsText}>{idInputValue} is {idCheckResult ? "registered!" : "not registered!"}</Text>
            </View>
        }
        {
            idInputValue.length == 8 && !idCheckResult && <View style={styles.addParticipantButton}>
                <Pressable onPress={()=>{
                    addParticipant(workshop_id, idInputValue).then((id)=>{
                        setParticipantsList([...participantsList, id])
                    });
                    setIdInputValue("")
                }}>
                    <Text style={styles.button}>Press here to add!</Text>
                </Pressable>
            </View>
        }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors["backgroundColor"],
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
    addParticipantButton: {
        backgroundColor: Colors["backgroundColor"]
    },
});