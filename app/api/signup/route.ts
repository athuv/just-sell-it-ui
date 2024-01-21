'use server';

/* eslint-disable import/prefer-default-export */
import { TSignupSchema, signupSchema } from '@/lib/zodSchema/signupSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: TSignupSchema = await request.json();
  const result = signupSchema.safeParse(body);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  if (result.success) {
    console.log('succeed');
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true },
  );
}
