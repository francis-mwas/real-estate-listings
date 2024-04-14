import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_NEXT_URL;
const supabaseKey = process.env.SUPABASE_NEXT_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
