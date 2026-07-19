import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-id.supabase.co';
// Sanitasi URL: Hapus /rest/v1 atau trailing slash jika ada
const supabaseUrl = rawUrl.trim().replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key').trim();

export const isSupabaseConfigured = () => {
  return (
    Boolean(import.meta.env.VITE_SUPABASE_URL) &&
    Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY) &&
    !supabaseUrl.includes('your-supabase-id')
  );
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
