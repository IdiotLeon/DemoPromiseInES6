const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        reject(new Error('The promise was rejected by using reject function.'));
    }
    throw new Error('The promise was rejected by throwing an error');
});

/*
It’s the same as the first example, but now it rejects with 90 percent probability and throws an error in 10% of the cases. 
On line 13 and 14 we have defined onResolved and onRejected callbacks , respectively. Note that onRejected will be executed even if an error was thrown. It’s not necessary to reject a promise by passing an error in the reject function. That is, a promise is reject in both cases.
*/
myPromise.then(
    () => console.log('resolved'),
    (error) => console.log(error.message);
);


// Remember that .catch is just a syntactical sugar for .then(undefined, onRejected).
myPromise.catch(
    (error) => console.log(error.message);
);