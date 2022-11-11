import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://qemvpudobkvbcfjptjro.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbXZwdWRvYmt2YmNmanB0anJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTY0MDYsImV4cCI6MTk4Mzc3MjQwNn0.npHBGAkBLGTJTonoYJ6ZIIoyN_fbAmy6RWZFnbJp7B0'
);
