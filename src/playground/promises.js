const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Léo',
        //     age: 29
        // });
        reject('Couldn\'t connect to database');
    }, 1500);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
});