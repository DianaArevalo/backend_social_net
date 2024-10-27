import { Schema, model } from "mongoose";
import mongoosepaginate from "mongoose-paginate-v2"

const UserSchema = Schema ({
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    nick: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    bio: String,

    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "role_user"
    },
    image: { 
        type: String,
        default: "default_user.png"
    },
    created_at: {
        type: Date,
        default: Date.now
    }

})

//configurar el plugin de mongo

UserSchema.plugin(mongoosepaginate);

export default model("User", UserSchema, "users");