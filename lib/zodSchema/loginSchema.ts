import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please provide a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
