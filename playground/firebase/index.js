import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB1xMNsnbA34brhQUDPQTChzSmn9CVKijA",
    authDomain: "react-todo-91cea.firebaseapp.com",
    databaseURL: "https://react-todo-91cea.firebaseio.com",
    storageBucket: "react-todo-91cea.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Dave',
    age: 29
  }
}).then(() => {
  console.log('Set worked!');
}, (e) => {
  console.log('Set failed!');
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo One'
});

todosRef.push({
  text: 'Todo Two'
});
