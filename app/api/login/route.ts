'use server';

/* eslint-disable import/prefer-default-export */
import { TLoginSchema, loginSchema } from '@/lib/zodSchema/loginSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: TLoginSchema = await request.json();
  const result = loginSchema.safeParse(body);

  // check out Zod's .flatten() method for an easier way to process errors
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
