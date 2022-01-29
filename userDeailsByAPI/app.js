//Call load All Data
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>{
        loadData(data)
    })
//-----------------------------------------------------------

//specific count data call button
const search = document.getElementById("searchBtn");

search.addEventListener("click",()=>{
    const input = document.getElementById("input").value;
    const inputCount = parseInt(input);
    if (inputCount>0) {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>{
        data = data.slice(0,inputCount)
        const userList = document.getElementById("user-list");
        userList.innerHTML = "";
        loadData(data)
    })
    } else {
        alert("Please inset a number")
    }
})
//------------------------------------------------------------

//Data load function
function loadData(data){
    data.forEach(user => {
        const username = user.name;
        const userId =user.id;
        const userList = document.getElementById("user-list");
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-content-center");
        listItem.innerHTML = `
                            <span class="">${username}</span>
                            <button class="btn badge bg-primary rounded" onclick="userDetails(${userId})">Details</button>
                        `
        userList.appendChild(listItem);
    });
}
//Single User Data Load Function
function userDetails(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user =>{
        const name = user.name;
        const email = user.email;
        const phone = user.phone;
        const website =user.website;
        const address = `${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`
        const userData = document.getElementById("user-data");
        userData.innerHTML = `
                            <li class="list-group-item"><strong>Name :</strong> ${name}</li>
                            <li class="list-group-item"><strong>Email :</strong> ${email}</li>
                            <li class="list-group-item"><strong>Phone :</strong> ${phone}</li>
                            <li class="list-group-item"><strong>Website :</strong> ${website}</li>
                            <li class="list-group-item"><strong>Address :</strong> ${address}</li>
                            `

    })
}