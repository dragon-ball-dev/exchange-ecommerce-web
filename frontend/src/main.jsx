import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AntdConfigProvider from './components/AntdConfigProvider/index.jsx';
import GlobalStyles from './components/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AntdConfigProvider>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AntdConfigProvider>
    </React.StrictMode>,
);
