const search = document.getElementById("searchBtn");
search.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>{
        data.forEach(user => {
            const username = user.name;
            const userId =user.id;
            const userList = document.getElementById("user-list");
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-content-center");
            listItem.innerHTML = `
                                <span class="">${username}</span>
                                <span class="badge bg-primary rounded">Details</span>
                            `
            userList.appendChild(listItem);
        });
    })
})