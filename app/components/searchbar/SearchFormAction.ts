'use server';

export async function SearchFormSubmit(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  console.log(formData.get('location'));
  console.log(formData.get('category'));
  console.log(formData.get('keyword'));
}
