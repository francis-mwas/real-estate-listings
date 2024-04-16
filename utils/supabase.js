import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.NEXT_SUPABASE_API_KEY;

let supabase;

try {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and key are required.');
  }

  supabase = createClient(supabaseUrl, supabaseKey);
} catch (error) {
  console.error('Error initializing Supabase client:', error.message);
}

export default supabase;
