// import { Request, Response } from 'express';
// import { createUser, User } from '../../database/models';
//
// export async function createUserController(req: Request, res: Response): Promise<void> {
//     try {
//         const user: User = req.body;
//         const newUser = await createUser(user);
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// }
