class ProductManager {

    #precioBaseDeGanancia
    constructor() {
        this.products = []
        this.#precioBaseDeGanancia = 1
    }

    getProducts = () => { return this.products }
    getNextID = () => {
        const count = this.products.length

        if (count > 0) {
            const lastProduct = this.products[count-1]
            const id = lastProduct.id + 1

            return id
        } else {

            return 1
        }
    }

    addProduct = (title, description, price, thumbnail, code,) => {
        const id = this.getNextID()
        const product = {
            id,
            title,
            description,
            price: price * (1 + this.#precioBaseDeGanancia),
            thumbnail: thumbnail ?? 50,
            code: code ?? new Date().toLocaleDateString(),
            stock: [50]
        }

        this.products.push(product)
    }


}

const productManager = new ProductManager()
productManager.addProduct("Alfajor", "alfajor relleno de ddl", 180, 0, 0)
productManager.addProduct("Oreos", "galletita de chocolate rellena de crema", 300, 0, 0)


console.log(productManager.getProducts());