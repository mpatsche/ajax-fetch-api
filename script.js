const buttonText = document.querySelector('.get-text');
const buttonUsers = document.querySelector('.get-users');
const buttonAPIdata = document.querySelector('.get-posts');

buttonText.addEventListener('click', getText);
buttonUsers.addEventListener('click', getUsers);
buttonAPIdata.addEventListener('click', getPosts);

function getText() {
    /* standard functions:
    fetch('sample.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
        })*/

    // with arrow functions: 
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.querySelector('.output').innerHTML = data;
        })
        .catch((err) => console.log(err))
}

function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Users</h2>`;
            console.log(data);
            data.forEach(function(user) {
                output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>`;
            });
            document.querySelector('.output').innerHTML = output;
        })
}

// Get API data
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Posts</h2>`;
            console.log(data);
            data.forEach(function(post) {
                output += `
                        <div>
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>`;
            });

            document.querySelector('.output').innerHTML = output;
        })
}