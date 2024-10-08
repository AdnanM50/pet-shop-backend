import jwt from 'jsonwebtoken';
import { Response } from 'express';

export const generateTokenAndSetCookie = (res: Response, userId: string) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: '1d',
    });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000,
    });
};