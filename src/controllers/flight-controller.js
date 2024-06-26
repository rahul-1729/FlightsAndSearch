const {FlightService} =require('../services/index');
const { SuccessCodes } = require('../utils/error-code');
const flightService = new FlightService();

const create =async (req,res)=>{
    try{

        const flightRequestData={
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price :req.body.price 
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.OK).json({
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