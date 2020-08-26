import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_URI: 'mongodb+srv://tokoUser:tokouserpass@tokobaju.dfna6.gcp.mongodb.net/tokobaju?retryWrites=true&w=majority',
    JWT_SECRET: 'secret',
    PORT: process.env.PORT,
    MONGO_DB_NAME: 'tokobaju',
}