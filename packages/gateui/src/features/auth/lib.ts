export const supabaseAuthFunctions = `
"use server";

import { User, AuthResponse, Provider } from '@supabase/supabase-js';
import { createClient } from "{supabaseServerClient}";

export const getUser = async (): Promise<User | null> => {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};

export const loginWithProvider = async (provider: Provider): Promise<AuthResponse> => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({ provider });
  if (error) throw error;
  return data;
};

export const loginWithMagicLink = async (email: string): Promise<AuthResponse> => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOtp({ email });
  if (error) throw error;
  return data;
};

export const logout = async (): Promise<void> => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
`;
