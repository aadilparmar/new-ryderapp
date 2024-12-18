const mongoose= require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

const captainSchema= new mongoose.Schema({
     fullname:{
        firstname:{
            type:String, 
            required:true,
            minlength:[3,'First name must be more than three character long'],
        },
        lastname:{
            type:String,
            minlength:[3,'LastFirst name must be more than three character long'],
        }
     },
     email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'email must have atleast 5 characters']
     },
     password:{
        type:String,
        required:true,
        select:false,
     },
     socketId:{
        type:String,
     },
     currentStatus:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
     },
     vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be 3 charcter long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Number plate must be 3 charcter long']
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[3,'Capacity must be atleast 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']    
        }
     },
     location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
     }
})

captainSchema.methods.genrateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token; 
}

captainSchema.methods.comparePassword =async  function (password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',captainSchema);

 module.exports=captainModel;