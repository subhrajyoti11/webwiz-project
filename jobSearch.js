const categories = Array.from(sCategory);
document.getElementById("searchBar").addEventListener("keyup",(e)=>{
    const searchData = e.target.value.toLowerCase()
    const filterData = categories.filter((item)=>
        item.title.toLowerCase().includes(searchData)
    );
  displayItems(filterData);
});

const displayItems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    items.forEach((item) => {
        const { index, image, title, rate, av } = item
        const jList = document.createElement("div")
        jList.classList = "jList";
        jList.innerHTML = `
        <img src=${image} alt="">
        <h3>${title}</h3>
        <p>${rate}</p>
        <span id="key">${av}</span>
     `;

     rootElement.appendChild(jList);

    });
};

displayItems(categories);