
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        console.log(response);
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })

axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(function (response) {
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })

axios.post('https://jsonplaceholder.typicode.com/users', { name: 'Riccardo Pace', username: 'RP', email: 'richi@gmail.com' })
    .then(function (response) {
        console.log(response);
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })


axios.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(function (response) {
        console.log(response);
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })