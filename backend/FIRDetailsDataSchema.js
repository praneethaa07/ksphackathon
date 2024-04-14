const mongoose = require('mongoose');

const firDetailsDataSchema = new mongoose.Schema({
    _id: String,
    District_Name: String,
    UnitName: String,
    FIRNo: String,
    RI: Number,
    Year: Number,
    Month: Number,
    Offence_From_Date: Date,
    Offence_To_Date: Date,
    FIR_Reg_DateTime: Date,
    FIR_Date: Date,
    FIR_Type: String,
    FIR_Stage: String,
    Complaint_Mode: String,
    CrimeGroup_Name: String,
    CrimeHead_Name: String,
    Latitude: Number,
    Longitude: Number,
    ActSection: String,
    IOName: String,
    KGID: Number,
    IOAssigned_Date: Date,
    Internal_IO: Number,
    Place_of_Offence: String,
    Distance_from_PS: String
});

module.exports = mongoose.model('FIR_Details_Data', firDetailsDataSchema);
