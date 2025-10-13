const url = 'https://api.github.com/users/aakarshKumar01';
const resp = fetch(url);
resp.then((response) => {
    console.log('Response received');
    return response.json();
}).then((data) => {
    console.log("Data", data);
}).catch((error) => {
    console.log("Error", error);
}); 

