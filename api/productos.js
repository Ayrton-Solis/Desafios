class apiProducts {
    constructor(){
        this.products = [];
        this.id = 0;
    }
    getAll(){
        return this.products
    }
    getById(id){
        const product = this.products.find(e => e.id === id);
        return product
    }
    addProduct(product){
        const newProduct = { ...product, id: ++this.id }
        this.products.push(newProduct);
        return this.id;
    }
    updateProduct(id, prod){
        const newProd = {...prod , id: Number(id)}
        const index = this.products.findIndex(e => e.id === id);
        if (index == -1) {
            return { error: 'Error: Producto no encontrado' }
        } else {
            this.products.splice(index, 1, newProd);
            return newProd
        }
    }
    deleteProduct(id){
        const index = this.products.findIndex(e => e.id === id);
        if (index == -1) {
            return { error: 'Error: Producto no encontrado '}
        } else {
            this.products.splice(index, 1);
        }
    }
};

export default apiProducts
