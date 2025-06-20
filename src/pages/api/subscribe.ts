import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email;

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({
          message: 'Please provide a valid email address'
        }), 
        { status: 400 }
      );
    }

    // TODO: Add your newsletter service integration here
    // For example, with Mailchimp, ConvertKit, etc.
    
    // For now, we'll just return a success response
    return new Response(
      JSON.stringify({
        message: 'Thank you for subscribing!'
      }), 
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'An error occurred. Please try again later.'
      }), 
      { status: 500 }
    );
  }
} 