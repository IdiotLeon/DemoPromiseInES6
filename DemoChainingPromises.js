const delay = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
);

delay(2000)
    .then(() => {
        console.log('Resolved after 2 seconds.');
        return delay(1500);
    })
    .then(() => {
        console.log('Resolved after 1.5 seconds.');
        return delay(3000);
    })
    .then(() => {
        console.log('Resolved after 3 seconds.');
        throw new Error();
    })
    // We are throwing an error in the .then. That means the current promise is rejected, and is caught in the next .catch handler.Hence, Caught an error gets printed. However, a .catch itself is alwaysresolved as a promise, and not rejected (unless you intentionally throw an error). That’s why the .then following .catch is executed.
    .catch(() => {
        console.log('Caught an error.');
    })
    .then(() => {
        console.log('Done.');
    });