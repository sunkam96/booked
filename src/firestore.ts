import { initializeApp } from "firebase/app";
import { doc, addDoc, getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { BookingData, Provider, ServiceItem } from "./data";

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


async function fetchProviderDetails(providerId: number) {
  const providerQuery = query(collection(db, "providers"), where("id", "==", providerId))
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

async function writeBookingData(bookingData: BookingData) {
  try {
    const bookingsRef = collection(db, "bookings");
    const newBookingRef = await addDoc(bookingsRef, {
      provider: {
        name: bookingData?.provider?.name,
        id: bookingData?.provider?.id,
      },
      serviceItem: {
        service: bookingData?.serviceItem?.service,
      },
      serviceDate: bookingData.serviceDate,
      customer: {
        name: bookingData?.customer?.name,
        email: bookingData?.customer?.email,
        phone: bookingData?.customer?.phone
      }
    });
  } catch (e) {
    console.error("Error adding document: ", bookingData, e);
  }
}

export {fetchProviderDetails, writeBookingData}