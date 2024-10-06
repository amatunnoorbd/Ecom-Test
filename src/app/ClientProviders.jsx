"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize React Query Client
const queryClient = new QueryClient();

export default function ClientProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
