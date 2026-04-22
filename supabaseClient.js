const SUPABASE_URL = "https://supwghozaiqdwvunjdpd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cHdnaG96YWlxZHd2dW5qZHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4ODYwODEsImV4cCI6MjA5MjQ2MjA4MX0.SK8qZXjgHCuELBz1lpZYAfO939i3cqs-qyAGBN9AruE";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);