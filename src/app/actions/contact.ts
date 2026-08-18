"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const result = contactSchema.safeParse(data);
  
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Form validation failed.",
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from('ContactSubmission').insert([{
      name: result.data.name,
      email: result.data.email,
      message: result.data.message,
    }]);

    if (error) throw error;

    return {
      message: "Protocol Sent! Command Center has received your message.",
      success: true,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      message: "Internal Server Error. Try again later.",
    };
  }
}
