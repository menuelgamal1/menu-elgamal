const container_3 = document.getElementById("container_3");

menu_items_3.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-price">${item.price} جنية</div>
  `;

    container_3.appendChild(itemDiv);
});