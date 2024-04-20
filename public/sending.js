import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDoc, getDocs,addDoc} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function writedata(category,detial,url,pic,name)
{
    const reference = collection(db,'database');
    let dat = {Category: category,
        Name:name,
        description:detial,
        link:url,
        picture:pic
        }
    addDoc(reference,dat);
}

export {writedata};