import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.name || !data.college || !data.contactNumber || !data.email || !data.motivation || !data.expectedParticipants) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Save to database
    const registration = await prisma.registration.create({
      data: {
        name: data.name,
        college: data.college,
        contactNumber: data.contactNumber,
        email: data.email,
        motivation: data.motivation,
        expectedParticipants: data.expectedParticipants,
        queries: data.queries || null,
      },
    });

    return NextResponse.json(
      { message: 'Registration successful!', registration },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
