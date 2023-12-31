'use server';
import { searchSchema } from '@/lib/searchSchema';

export async function SearchFormSubmit(prevState: any, formData: FormData) {
  const validatedFields = searchSchema.safeParse({
    location: formData.get('location'),
    category: formData.get('category'),
    keyword: formData.get('keyword'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (validatedFields.success) {
    console.log(formData.get('location'));
    console.log(formData.get('category'));
    console.log(formData.get('keyword'));
  }
}
