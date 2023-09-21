import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yfrogyksdvtdsxuidaxq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmcm9neWtzZHZ0ZHN4dWlkYXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyOTIzOTMsImV4cCI6MjAxMDg2ODM5M30.q3YK4eYhzYAdjtViwVlLJgl-34b5xGSpoAWyyxRXqFg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
