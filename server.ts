import app from './src/app';
import { Request, Response, NextFunction } from 'express';

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
