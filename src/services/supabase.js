/** @format */

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://szzjptnwonxmvodiigyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6empwdG53b254bXZvZGlpZ3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2OTc2MDAsImV4cCI6MjAxMjI3MzYwMH0.dFNMHEFl4U3Vvv2rMwWrDl3ljXriL9b1n_pO-wavS34";
// CREATE SUPABASE CLIENT BASED ON  supabaseUrl AND supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
