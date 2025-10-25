import { supabase } from './supabaseClient.js';

document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    document.getElementById('error').textContent = 'بيانات الدخول غير صحيحة';
  } else {
    localStorage.setItem('alma_session', JSON.stringify(data.session));
    window.location.href = 'dashboard.html';
  }
});
