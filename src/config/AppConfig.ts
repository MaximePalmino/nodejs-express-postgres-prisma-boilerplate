import dotenv from 'dotenv';

dotenv.config();

export const AppConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '4000', 10)
};
