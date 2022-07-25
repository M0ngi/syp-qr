import { getFirestore, doc, updateDoc, getDoc, runTransaction, Transaction } from "firebase/firestore";

export async function getParticipants(workshop_id: string) : Promise<string[]> {
    const workshop_doc = await getDoc(doc(getFirestore(), "workshops", workshop_id));
    if(workshop_doc.exists()){
        return workshop_doc.get("participants") ?? []
    }
    return []
}

export async function addParticipant(workshop_id:string, participant_id: string) : Promise<string> {
    const workshop_doc = doc(getFirestore(), "workshops", workshop_id);
    await runTransaction(getFirestore(), async (transaction: Transaction)=>{
        const data = await transaction.get(workshop_doc);
        if(data.exists()){
            let participants = (data.get("participants") ?? []) as string[];
            participants.push(participant_id);

            transaction.update(workshop_doc, {
                "participants": participants
            })
        }
    })
    return participant_id;
}