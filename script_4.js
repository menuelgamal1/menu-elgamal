const container_4 = document.getElementById("container_4");

menu_items_4.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-price">${item.price} جنية</div>
  `;

    container_4.appendChild(itemDiv);
});
