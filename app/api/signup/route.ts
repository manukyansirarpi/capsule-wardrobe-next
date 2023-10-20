
import connectMongoDB from '@/lib/mongodb';
import { hashPassword } from '@/lib/auth';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('request', request);
    if (request.method === 'POST') {
        try {
            const { name, email, password } = await request.json(); 
            if (!email || email.trim().length < 7 || !password || password.trim().length < 7 || !name || name.trim().length < 3 || !email.includes('@' )) {                      
                NextResponse.json({ message: 'Invalid data' });
                return;
            }        
            const hashedPassword = await hashPassword(password);
            await connectMongoDB();

            User.create({name, email, password: hashedPassword });

            return NextResponse.json({ message: "User Created" }, { status: 201 });
        } catch (error) {
            console.error(error);
            NextResponse.json({ message: 'Something went wrong.' });
        }
    } else {
        NextResponse.json({ message: 'Method not allowed.' });
    }
}
