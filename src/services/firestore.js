// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,
    collection,
    getDocs, 
    doc,
    getDoc,
    query,
    where } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQpA9bNaPxF8a6DL1MjxclL3QQNhgkRlo",
  authDomain: "tienda-react-d87e3.firebaseapp.com",
  projectId: "tienda-react-d87e3",
  storageBucket: "tienda-react-d87e3.appspot.com",
  messagingSenderId: "1063952468365",
  appId: "1:1063952468365:web:1a12023ee11a7a078815c4",
  measurementId: "G-MRSZGGVDK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export async function getItems(){
    const misProductos = collection(firestore, "puas");
    let snapshotDB = await  getDocs(misProductos);
    
    let dataDocs = snapshotDB.docs.map( (documento) => {
      let docFormat = {...documento.data(), id: documento.id};
      return docFormat
    });
    return dataDocs;
}



export async function getItem(idParams) {
  try {
    const docRef = doc(firestore, "puas", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemByCategory(catParams) {
  const collectionRef = collection(firestore, "puas");
  const queryCategory = query(
    collectionRef,
    where("categoria", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}


export default firestore;