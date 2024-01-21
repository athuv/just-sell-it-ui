import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(35, 'Name must be less than 35 characters'),
    email: z.string().email('Please provide a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message:
      "The passwords you entered don't match. Please ensure they are identical.",
    path: ['confirmPassword'],
  });

export type TSignupSchema = z.infer<typeof signupSchema>;
