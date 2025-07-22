import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage} from "firebase/storage";
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
  return new Provider(data.name, data.logoUrl, data.description, data.email, serviceItems);
}

async function writeBookingData(bookingData: BookingData) {
  const bookingsRef = collection(db, "bookings");
  await addDoc(bookingsRef, {
    provider: {
      name: bookingData?.provider?.name,
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
}

async function saveProviderLogoImage(logoImage: File ){
  const storage = getStorage(app);
  const storageRef = ref(storage, `images/${logoImage.name}`);

  const snapshot = await uploadBytes(storageRef, logoImage);

  const url = await getDownloadURL(snapshot.ref);
  return url;
}

async function writeNewProvider(provider: Provider) {
  const providersRef = collection(db, "providers");
  // Convert ServiceItem instances to plain objects
  const plainServices = (provider.services ?? []).map((service: ServiceItem) => ({
    service: service.service,
    description: service.description,
    price: service.price,
    duration: service.time
  }));
  return await addDoc(providersRef, {
    name: provider.name,
    email: provider.email,
    logoUrl: provider.logoUrl,
    description: provider.description,
    services: plainServices
  });
}

export {fetchProviderDetails, writeBookingData, writeNewProvider, saveProviderLogoImage}