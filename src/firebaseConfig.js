import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAYoajpENV1nmW2edjHk9gM7AO2tZ4v_3U',
    authDomain: 'luxstay-d7077.firebaseapp.com',
    databaseURL: 'https://luxstay-d7077-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'luxstay-d7077',
    storageBucket: 'luxstay-d7077.appspot.com',
    messagingSenderId: '452858951942',
    appId: '1:452858951942:web:a794a2bb1773f39a694687',
    measurementId: 'G-1WJN3CFV1E',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
