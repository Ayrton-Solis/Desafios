const { promises: fs } = require('fs')


class contenedor {

    constructor(ruta) {
        this.ruta = ruta;
    }


    async save(objeto) {
        // obtener todos los datos que ya existen en el archivo
        const objetos = await this.getAll();

        // logica para obtener el nuevo id
        let newId;
        if (objetos.length == 0) {
            newId = 1
        } else {
            newId = objetos[objetos.length - 1].id + 1  
        }

        // agregar el nuevo objeto al array que ya existe
        const nuevoObjeto = {...objeto, id: newId}
        objetos.push(nuevoObjeto);

        // guardar el nuevo array con el nuevo objeto agregado
        try {
            await fs.writeFile(this.ruta, JSON.stringify(objetos, null, 2))
            return newId
        } catch (error) {
            throw new error(`Error al guardar ${error}`);
        }
    }

    async getById(id) {
        // obtengo todos los datos del array
        const objetos = await this.getAll();

        // filtro el id para obtener el objeto con el mismo y lo retorno 
        const nuevoObjeto = objetos.find(elemento => elemento.id == id)
        return nuevoObjeto;
    }

    async getAll() {
        // obtener todos los datos que ya existen en el archivo
        try {
            const objetos = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(objetos)
        } catch (error) {
            return [];
        }
    }

    async deleteById(id) {
        // obtener todos los datos que ya existen en el archivo
        const objetos = await this.getAll();

        // filtrar los datos
        const nuevoObjeto = objetos.filter(elemento => elemento.id !== id)

        // validacion
        if (nuevoObjeto.length === objetos.length) {
            await fs.writeFile(this.ruta, JSON.stringify(objetos, null, 2))
            throw new error(`Error al borrar, el id: ${id} no se encontro, por favor poner un id existente`);
        } else {
            try {
                await fs.writeFile(this.ruta, JSON.stringify(nuevoObjeto, null, 2));
            } catch (error) {
                throw new error(`Error al guardar los cambios ${error}`);
            }
        }

        // guardado de los cambios

    }

    async deleteAll() {
        await fs.writeFile(this.ruta, JSON.stringify([], null, 2));
    }
}

module.exports = contenedor