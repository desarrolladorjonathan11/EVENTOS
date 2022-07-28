class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const users = []
const form = document.getElementById('idForm')
const divUsers = document.getElementById('divUsers')
const botonUsers = document.getElementById('botonUsers')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('idUser').value
    let email = document.getElementById('idEmail').value
    let password = document.getElementById('idPassword').value

    console.log(username, email, password)
    const user = new User(username, email, password)
    users.push(user)
    console.log(users)
    form.reset()
})

botonUsers.addEventListener('click', () => {
    users.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin: 3px;">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                        <p class="card-text">${user.email}</p>
</div>
</div>
`
    })
})