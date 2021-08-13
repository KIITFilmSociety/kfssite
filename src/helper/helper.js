import firebase from '../core/firebase'



const findCodd=(val,arr) => {
  
    firebase
          .firestore()
          .collection('UserInfo')
          .where('Position', '==', `${val}`)
          .get()
          .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
      console.log(doc.data())
      const person = {
        FullName: doc.data().FullName,
        Position: doc.data().Position,
        Description: doc.data().Description,
        Instagram: doc.data().Instagram,
        Linkedin: doc.data().Linkedin,
        Email: doc.data().Email,
        DP: doc.data().DP
      }
      arr.push(person)
    })
    console.log(val);
    
   
  })
  }


  export default findCodd;