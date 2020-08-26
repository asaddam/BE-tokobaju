import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_URI: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
}