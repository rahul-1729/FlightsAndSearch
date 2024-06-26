const {CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
          try{
              const city = await this.CityRepository.createCity(data);
              return city;
          }catch(error)
          {
             console.log("something went wrong in service layer");
             throw{error};
          }
    }

    async deleteCity(cityId){
        try{
            const response = await this.CityRepository.createCity(data);
            return response;
        }catch(error)
        {
           console.log("something went wrong in service layer");
           throw{error};
        }
    }

    async updateCity(cityId,data){
        try{
             const city = await this.CityRepository.updateCity(cityId,data )
        }catch(error)
        {
           console.log("something went wrong in service layer");
           throw{error};
        }
    }

    async getCity(cityId){

        try{
              const city = await this.CityRepository.getCity(cityId)
              return 
        }catch(error)
        {
           console.log("something went wrong in service layer");
           throw{error};
        }
   }
}