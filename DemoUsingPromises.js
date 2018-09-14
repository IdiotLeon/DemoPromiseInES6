const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('Resolving the promise ...');
        resolve('Hello, Promises!');
    }

    reject(new Error('In 10% of the cases, I fail. Miserably'));
});

// Two functions
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// The same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});

/*
A few important things to note in the previous example.

We created a promise myPromise. We attached a .then handler two times: on line 13, and 16. Though, they are same in functionality, they are treated as different handlers. However —

A promise can only succeed(resolved) or fail(reject) once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
If a promise has succeeded or failed and you later add a success/failure callback (i.e a .then), the correct callback will be called, even though the event took place earlier.
That means once the promise reaches a final state, the state won’t change (that is, the computation will not be done again ) even if you attach .thenhandler multiple times.

To verify this, you can see a console.log statement on line 3. When you run the above code with both .then handler, the logged statement will be printed only once. It shows that the promise caches the result, and will give the same result next time.

The other important thing to note is that a promise is evaluated eagerly. Itstarts its execution as soon as you declare and bind it to a variables. There is no .start or .begin method. Like it began in the previous example.

To ensure that promises are not fired immediately but evaluates lazily, we wrap them in functions.
*/