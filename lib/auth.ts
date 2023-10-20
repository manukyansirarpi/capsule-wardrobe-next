import { compare, hash } from "bcryptjs";



export const hashPassword = (password: string): Promise<string> => {
    const saltRounds = 12;
    return hash(password, saltRounds);
}

export const validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}