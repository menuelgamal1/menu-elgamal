const container_2 = document.getElementById("container_2");

menu_items_2.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
    <div class="item-name">${item.name}</div>
    <div class="item-price">${item.price} جنية</div>
  `;

    container_2.appendChild(itemDiv);
});
