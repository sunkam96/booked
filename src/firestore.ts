import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { Provider as Provider, ServiceItem as ServiceItem } from "./data";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function fetchProviderDetails(providerName: string) {
  const providerQuery = query(collection(db, "providers"), where("name", "==", providerName))
  const querySnapshot = await getDocs(providerQuery);
  if (querySnapshot.empty) {
    return null;
  }
  const data = querySnapshot.docs[0].data();
  const serviceItems: ServiceItem[] = []
  data.services.forEach((service: any) => {
    serviceItems.push(new ServiceItem(service.service, service.description, service.price, service.duration))
  })
  return new Provider(data.name, data.id, data.description, serviceItems);
}

export {fetchProviderDetails}