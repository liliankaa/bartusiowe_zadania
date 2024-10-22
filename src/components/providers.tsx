"use client";

import { QueryClientProvider } from "react-query";
import { useState } from "react";
import { QueryClient } from "react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
