// backend/controllers/finesController.js
import FinesModel from '../models/finesModel.js';

class FinesController{

    //to get all the members
    static async getAllFines(req, res) {
        try {
            const fines = await FinesModel.getAllFines();

            // set the status code and content-type
            res.writeHead(200, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });

            // send the data
            res.end(JSON.stringify(fines));

        } catch (error) {
            throw new Error(`Error getting all fines.`);
        }
    }
}

export default FinesController;
