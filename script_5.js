const container_5 = document.getElementById("container_5");

menu_items_5.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-price">${item.price} جنية</div>
  `;

    container_5.appendChild(itemDiv);
});
