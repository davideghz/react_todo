import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyB1xMNsnbA34brhQUDPQTChzSmn9CVKijA",
      authDomain: "react-todo-91cea.firebaseapp.com",
      databaseURL: "https://react-todo-91cea.firebaseio.com",
      storageBucket: "react-todo-91cea.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
