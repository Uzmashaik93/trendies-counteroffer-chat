import { NextResponse } from 'next/server';

export async function POST() {
    const res = NextResponse.json({ message: 'Logged out' });
    res.cookies.set('token', '', {
        path: '/',
        httpOnly: true,
        expires: new Date(0),
    });
    return res;
}
