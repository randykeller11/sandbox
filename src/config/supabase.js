import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bkfqeupznloapaerdplt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM2NjQ0ODUwLCJleHAiOjE5NTIyMjA4NTB9.sHDiFqt_AmI0a5ju61emz3pbu8pB6BS4HQgyuRofda0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
