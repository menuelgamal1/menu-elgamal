const container = document.getElementById("container");

menu_items_1.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-price">${item.price} جنية</div>
  `;

    container.appendChild(itemDiv);
});
