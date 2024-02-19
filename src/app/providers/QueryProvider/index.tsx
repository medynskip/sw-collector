'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';

const STALE_TIME = 10 * 60 * 1000; //10 minutes

const ReactQueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: STALE_TIME, 
          },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;