
import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const PublicationsSchema = Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },

    text: {
        type: String,        
        required: true,
    },

    file: {
        type: String,
        created_at: {
            type: Date,
            default: Date.now
        }
    }
});


//configurar el plugin de paginacion
PublicationsSchema.plugin(mongoosePaginate);

export default model("Publication", PublicationsSchema, "publications");