const promiseThatResolves = () => new Promise((resolve, reject) => {
    resolve();
});

// Leads to UnhandledPromiseRejection
promiseThatResolves().then(
    () => { throw new Error },
    (err) => console.log(err),
);

// Proper error handling
promiseThatResolves()
    .then(() => {
        throw new Error();
    })
    .catch(err => console.log(err));