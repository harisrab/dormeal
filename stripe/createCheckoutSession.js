import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useEffect } from "react";
import { app, auth, data_base } from "../firebase-config";
import getStripe from "./initializeStripe";

export async function createChecoutSession({ uid }) {
    

    // const db = getFirestore(app);

    // const customerRef = collection(data_base, "customers");

    const checkoutSessionRef = await setDoc(
        doc( data_base, "customers", "jieES0UkViWh4nfTkLTGIKBStgN2", "checkout_sessions", "R1AetUyNgZFLUHGSwY0D"),
        {
            mode:"payment",
        price: "price_1KXsbVHFkISLQ6UVUfOTyaV7",
        success_url: window.location.origin,
        cancel_url: window.location.origin,    
        }
    );

//   const checkoutSessionRef = await getFirestore(app)
//     .collection("customers")
//     .doc(uid)
//     .collection("checkout_sessions")
//     .add({
//         mode:"payment",
//         price: "price_1KXsbVHFkISLQ6UVUfOTyaV7",
//         success_url: window.location.origin,
//         cancel_url: window.location.origin,
//     });

    checkoutSessionRef.onSnapshot(async (snap) => {
        const {sessionId} = snap.data();

        if (sessionId) {
            const stripe = await getStripe();
            stripe.redirectToCheckout({ sessionId });
        }

    })

}
