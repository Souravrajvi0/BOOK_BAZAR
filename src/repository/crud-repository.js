class CRUD_REPOSITORY {
    constructor(model){
        this.model = model;
    }

    async create(data){
      const response = await this.model.create(data);
      return response;
    }

    async getAll(){
        const response = await this.model.findAll();
        return response;
    }
    
    async get(filter){
        const response = await this.model.findByPk(filter);
        return response;
    }

    async destroy(filter){
        const response = await this.model.destroy(filter);
        console.log(response)
        return response;
    }

    async update(data,filter){
        const response = await this.model.update(data,filter)
    }

}

module.exports = CRUD_REPOSITORY