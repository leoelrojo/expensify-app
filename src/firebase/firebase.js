import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
    apiKey: "AIzaSyAfpAQ6lXLbcJifwZlKwrFAo2JOYWTYUA4",
    authDomain: "expensify-805a5.firebaseapp.com",
    databaseURL: "https://expensify-805a5.firebaseio.com",
    projectId: "expensify-805a5",
    storageBucket: "expensify-805a5.appspot.com",
    messagingSenderId: "617388847442",
    appId: "1:617388847442:web:d6ccd2d7d86b4d43d70a8b",
    measurementId: "G-531X9365YB"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 ...childSnapshot.val(),
//                 id: childSnapshot.key               
//             });
//         });

//         console.log(expenses);
//     });


// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// };

// database.ref('notes/-M8gURZhSqxjNCm2-N_M').remove();

// database.ref('notes').set(firebaseNotes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//     database.ref('name').set('Prisci');
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(32);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(40);
// }, 10000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Léo',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Engineer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Paris',
//         country: 'France'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('error:', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Cahors'
// }).then(() => {
//     console.log('Data is updated');
// }).catch((e) => {
//     console.log('error:', e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Remove operation successful');
//     }).catch((e) => {
//         console.log('error:', e);
//     });