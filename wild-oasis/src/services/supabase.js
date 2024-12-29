import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://https://xyzcompany.supabase.co";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://xyzcompany.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uaXhpb3J6ZG1hbWx5enZ2bml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzOTYwNzksImV4cCI6MjA1MDk3MjA3OX0.G9AThegUq3g6AbO42lknssmxJCWO0SNj2lhWeqaj0ok"
);

export default supabase;
