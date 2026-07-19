import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

export async function getSupabaseProducts() {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase belum dikonfigurasi di .env');
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    throw new Error(`Gagal mengambil data dari Supabase: ${error.message}`);
  }

  return data;
}

export async function seedSupabaseProducts(items) {
  if (!isSupabaseConfigured()) return;
  const { data, error } = await supabase.from('products').insert(items).select();
  if (error) console.error('Gagal seed ke Supabase:', error.message);
  return data;
}

export async function deleteSupabaseProduct(id) {
  if (!isSupabaseConfigured()) return;
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) console.error('Gagal menghapus produk:', error.message);
}
