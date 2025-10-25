// js/supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://yqnvdurconsjesnampmj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbnZkdXJjb25zamVzbmFtcG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxNjQ5NjUsImV4cCI6MjA3MTc0MDk2NX0.nYDOKVvJH940jvidtLE1d5WGz1i7xJL51MiQj-xpS4o';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
