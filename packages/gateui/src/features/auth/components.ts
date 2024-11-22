const logout = `
"use client";

import { createClient } from "{supabaseClient}";
import { HTMLAttributes } from "react";

type LogoutProps = { className?: string } & HTMLButtonElement;

type LogoutProps = HTMLAttributes<HTMLButtonElement>;

export const Logout = ({ className }: LogoutProps) => {
  const supabase = createClient();

  // --- CALLBACKS ---

  const handleLogout = async () => {
    const { error } = await (await supabase).auth.signOut();

    console.error({ error });

    window.location.href = "/";
  };

  // --- RENDER ---

  return (
    <button onClick={handleLogout} className={className}>
      Logout
    </button>
  );
};
`;
