// backend/controllers/staffController.js
import StaffModel from '../models/staffModel.js';

class StaffController {
  // @desc  Gets All Staffs
  // @route GET /api/staff
  static async getAllStaffs(req, res) {
    try {
      const staffs = await StaffModel.findAllStaffs();

      res.writeHead(200, {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      });
      
      res.end(JSON.stringify(staffs));

    } catch(err) {
      // set error status code and content-type
      res.writeHead(500, { "Content-Type": "application/json" });
      // send error
      res.end(JSON.stringify({ message: err.message }));

    }
  }
}

export default StaffController;