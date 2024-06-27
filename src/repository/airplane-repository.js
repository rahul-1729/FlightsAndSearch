const {Airplane}=require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
      try{
          const airplane = await Airplane.findByPk(id);
          if (!airplane) {
            throw new Error('Airplane not found');
        }
          return airplane;
      }catch(error)
      {
        console.log("Something went wrong in the repository layer")
        throw(error);
      }
    }
}

module.exports = AirplaneRepository;