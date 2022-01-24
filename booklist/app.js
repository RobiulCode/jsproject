//dom selection
const tittle = document.getElementById("tittle");
const author = document.getElementById("author");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
const bookList = document.getElementById("book-list");
//function
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if (tittle.value == "" && author.value == "" && year.value == "") {
        alert("Please insert value");
    } else {
        const newRaw = document.createElement("tr");
        //creatElement
        const newtittle = document.createElement("td");
        newtittle.innerHTML = tittle.value;
        newRaw.appendChild(newtittle);
        //creatElement
        const newauthor = document.createElement("td");
        newauthor.innerHTML = author.value;
        newRaw.appendChild(newauthor);
        //creatElement
        const newyear = document.createElement("td");
        newyear.innerHTML = year.value;
        newRaw.appendChild(newyear);
        bookList.appendChild(newRaw);
        tittle.value = "";
        author.value = "";
        year.value = "";

    }
})