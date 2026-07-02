interface Product{
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
}

class CartItem {
    product: Product;
    quantity: number;

    constructor(product: Product) {
        this.product = product;
        this.quantity = 1;
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        this.quantity--;
    }

    getTotalPrice(): number {
        return this.product.price * this.quantity;
    }
}

class ProductCatalog {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(id: number): void {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];

            if (product.id === id) {
                this.products.splice(i, 1);
                return;
            }
        }
    }

    findProduct(id: number): Product | undefined {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];

            if (product.id === id) {
                return product;
            }
        }

        return undefined;
    }

    sortByPriceAscending(): void {
        this.products.sort((a, b) => a.price - b.price);
    }

    sortByPriceDescending(): void {
        this.products.sort((a, b) => b.price - a.price);
    }

    sortByName(): void {
        this.products.sort((a, b) => a.name.localeCompare(b.name));
    }

    viewProducts(): void {
        console.log("========== PRODUCT CATALOG ==========");

        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];

            console.log(`ID: ${product.id}`);
            console.log(`Name: ${product.name}`);
            console.log(`Price: ₦${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log(`Stock: ${product.stock}`);
            console.log("----------------------------");
        }
    }

    getProductCount(): number {
        return this.products.length;
    }
}

class ShoppingCart {
    private items: CartItem[] = [];
     
    addProduct(product: Product) {
        for (const item of this.items) {
            if (item.product.id === product.id) {
                item.increaseQuantity();
                return;
            }
        }
        const cartItem = new CartItem(product);
        this.items.push(cartItem);
    }

    removeProduct(productID: number): void {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (item.product.id === productID) {
                if (item.quantity > 1) {
                    item.decreaseQuantity();
                } else {
                    this.items.splice(i, 1)
                }
                return;
            }
        }
    }
    
    viewCart(): void {
        console.log("========== SHOPPING CART ==========");
        let grandTotal = 0;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];

            console.log(`Product: ${item.product.name}`);
            console.log(`Price: ₦${item.product.price}`);
            console.log(`Quantity: ${item.quantity}`);
            const subTotal = item.getTotalPrice();
            console.log(`Subtotal: ${subTotal}`);
            console.log("----------------------------");
            grandTotal += subTotal;
        }

        console.log(`Grand Total: ${grandTotal}`)
    }

    clearCart() {
        this.items =[];
    }

    getTotalItems(){
        let quant = 0;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            quant += item.quantity;
        }

        return quant;
    }

    getGrandTotal():number {
        let grandTotal = 0;

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            grandTotal += item.getTotalPrice();
        }

        return grandTotal;
    }
    
    sortByPriceAscending(): void {
        this.items.sort((a, b) => a.product.price - b.product.price);
    }

    sortByPriceDescending(): void {
        this.items.sort((a, b) => b.product.price - a.product.price);
    }

    checkOut() {
        if(this.items.length === 0) {
            console.log("The Cart is empty.");
            return;
        }

        for (const item of this.items) {
            if (item.quantity > item.product.stock) {
                console.log(`${item.product.name} is out of stock.`);
                return;
            }
        }

        for (const item of this.items) {
            item.product.stock -= item.quantity;
        }
        
        console.log("===== RECEIPT =====");
        this.viewCart();
        this.clearCart();
        console.log("Checkout successful!");
    }
}






// DEMO

// =========================
// CREATE THE PRODUCT CATALOG
// =========================

const catalog = new ProductCatalog();

catalog.addProduct({
    id: 1,
    name: "Laptop",
    price: 850000,
    category: "Electronics",
    stock: 5
});

catalog.addProduct({
    id: 2,
    name: "Phone",
    price: 450000,
    category: "Electronics",
    stock: 10
});

catalog.addProduct({
    id: 3,
    name: "Headphones",
    price: 50000,
    category: "Accessories",
    stock: 20
});

catalog.addProduct({
    id: 4,
    name: "Keyboard",
    price: 35000,
    category: "Accessories",
    stock: 8
});

catalog.addProduct({
    id: 5,
    name: "Mouse",
    price: 25000,
    category: "Accessories",
    stock: 15
});

console.log("\n===== PRODUCT CATALOG =====");
catalog.viewProducts();


// =========================
// SORT PRODUCTS
// =========================

console.log("\n===== SORTED BY PRICE (LOW TO HIGH) =====");
catalog.sortByPriceAscending();
catalog.viewProducts();


// =========================
// CREATE SHOPPING CART
// =========================

const cart = new ShoppingCart();


// =========================
// ADD PRODUCTS TO CART
// =========================

const laptop = catalog.findProduct(1);
const phone = catalog.findProduct(2);
const mouse = catalog.findProduct(5);

if (laptop) cart.addProduct(laptop);
if (phone) cart.addProduct(phone);
if (mouse) cart.addProduct(mouse);

// Add another phone to increase its quantity
if (phone) cart.addProduct(phone);


// =========================
// VIEW CART
// =========================

console.log("\n===== SHOPPING CART =====");
cart.viewCart();

console.log("Total Items:", cart.getTotalItems());
console.log("Grand Total: ₦" + cart.getGrandTotal());


// =========================
// CHECKOUT
// =========================

console.log("\n===== CHECKOUT =====");
cart.checkOut();


// =========================
// VIEW STORE AFTER CHECKOUT
// =========================

console.log("\n===== PRODUCT CATALOG AFTER CHECKOUT =====");
catalog.viewProducts();