import User from "../models/user";

async function findOrCreateUser(email: string): Promise<User> {
    // Add your own logic to find or create the user in the database
    const user: User = { email, createdAt: new Date(), updatedAt: new Date() };
    return user;
}

export default { findOrCreateUser };