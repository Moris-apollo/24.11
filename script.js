const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Udało się")}, 5000
    );
});

promise 
    .then(result => {
        console.log(result);
    });

function multiplyAsync(x, y) {
    const promise2 = new Promise((resolve, reject) => {
        if (isNaN(x) || isNaN(y)) {
            reject("Oba argumenty musza byc liczbami");
        } else {
            resolve(x*y);
        }
    });

    promise2
    .then(result => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
}

multiplyAsync(9,8);