class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'phone', price: 200 },
            { id: 2, title: 'book', price: 10 },
            { id: 3, title: 'pen', price: 120 },
            { id: 4, title: 'card', price: 30 },
        ];
    }

    // 2) метод для определения суммы всех товаров корзины _fetchProducts()
    countProductsPrice() {
        let productsPrice = 0;
        this.goods.forEach(element => {
            productsPrice = productsPrice + element.price;
        });
        console.log(`Сумма всех товаров в _fetchProducts() = ${productsPrice}`);
        //            block.innerHTML += productObj.render();
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
            //            block.innerHTML += productObj.render();
        }
    }

}


class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;

    }

    render() {
        return `<div data-id="${this.id}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button>Купить</button>
            </div>`
    }
}

// 1 Задание) 
// Класс Корзины товаров Cart
class Cart {
    constructor() {
    }
    // добавить товар
    add() {
    }
    // удалить товар
    remove() {
    }
    // подсчет Общей стоимости товаров в корзине 
    countBasketPrice() {
    }
    // подсчет Количества товаров в корзине
    countBasketQuantity() {
    }
    // вывод значений стоимости и количества товаров
    render() {
    }
}

//  Класс  элемента товаров корзины
class elementsCart {
    constructor() {
    }
    // метод формирующий элемент товара для корзины
    elementQuantity() {
    }
    // подсчет количества одинаковых элементов товаров в корзине
    countElementQuantity() {
    }
    // отправка товара в корзину
    render() {
    }
}




let list = new ProductsList();
list.render();
list.countProductsPrice(); // Второе задание, подсчет стоимости товаров _fetchProducts()










