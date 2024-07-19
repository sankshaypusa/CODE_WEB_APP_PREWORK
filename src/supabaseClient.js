
import { createClient } from  '@supabase/supabase-js';
const URL= 'https://qybymaycsvnlbojtilyf.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YnltYXljc3ZubGJvanRpbHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1ODQ5MzIsImV4cCI6MjAzNjE2MDkzMn0.k0bqBRbnoU4HFi3LNfcwgw2kDsI9uOoneuT_xtCzq5A';
export const supabase = createClient(URL, API_KEY);

