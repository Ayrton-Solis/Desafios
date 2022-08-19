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
        const product = this.products.find(e => e.id === id);
        
    }
}