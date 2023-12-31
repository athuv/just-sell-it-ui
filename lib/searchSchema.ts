import { z } from 'zod';

export const searchSchema = z.object({
  location: z.string().min(1, {
    message: 'Please provide a location. This field cannot be left empty.',
  }),
  category: z.string().min(1, {
    message: 'Please provide a category. This field cannot be left empty.',
  }),
  keyword: z.string().min(1, {
    message: 'Please provide a keyword. This field cannot be left empty.',
  }),
});

export type SearchSchema = z.infer<typeof searchSchema>;
