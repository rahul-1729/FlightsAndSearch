const {FlightService} =require('../services/index');

const flightService = new FlightService();

const create =async (req,res)=>{
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            sucess:true,
            err:{},
            message:'Successfully created a flight'
        })
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to create a flight',
            err: error
        });
    }
}

const getAll = async (req,res)=>{

    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data:response,
            success: true,
            err:{},
            message: 'Successfullly fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to fetch the flight',
            err: error
        });
    }
}

module.exports={
    create,
    getAll
}