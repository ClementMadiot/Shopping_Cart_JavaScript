const shop = document.getElementById('shop')

const shopItemData = [
  {
    id: 'jfhgbvnscs',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-1.jpg',
  },
  {
    id: 'ioytrhndcv',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-2.jpg',
  },
  {
    id: 'wuefbncxbsn',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-3.jpg',
  },
  {
    id: 'thyfhcbcv',
    name: 'Mens Suit',
    price: 300,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-4.jpg',
  },
]
const generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((i) => {
      let { id, name, price, desc, img } = i
      return `
    <div id='id_prod_${id}' class="item">
    <img width="200" src=${img} alt="">
        <div class="details">
          <h2>${name}</h2>
          <p>${desc}</p>
          <div class="price-quantity">
            <p>$ ${price}</p>
            <div class="btn">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`
    })
    .join(''))
}
generateShop()
