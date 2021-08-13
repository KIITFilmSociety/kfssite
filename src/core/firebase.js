import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBZGQUgkaPyxrNN2AC5ZmtmACl__gabCy8',
  authDomain: 'crud-1d475.firebaseapp.com',
  databaseURL:
		'https://crud-1d475-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crud-1d475',
  storageBucket: 'crud-1d475.appspot.com',
  messagingSenderId: '146210841885',
  appId: '1:146210841885:web:68095212eb181ea857edf4'
}

firebase.initializeApp(firebaseConfig)

export default firebase
