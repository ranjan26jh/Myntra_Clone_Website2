let bagItems=[];
displayItemOnHomePage();
displayBagIcon();

function addToBag(itemId){
  bagItems.push(itemId);
  displayBagIcon();
  if(bagItems.length>0){
    bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItems.length;
  }else{
    bagItemCountElement.style.visibility='hidden';
  }
}

function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count');
  bagItemCountElement.innerText=bagItems.length;
}
function displayItemOnHomePage(){
  let itemsContaierElement=document.querySelector('.items-container');

  let innerHTML='';
  
  items.forEach(item=>{
    innerHTML+=`
    <div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image"> 
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count} </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">${item.discount_price}%</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`;
    
  })
  itemsContaierElement.innerHTML =innerHTML;
}


