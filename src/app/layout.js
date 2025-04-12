'use client';

import './globals.css';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { RoleProvider } from '@/context/RoleContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <RoleProvider>
            {children}
          </RoleProvider>
        </Provider>
      </body>
    </html>
  );
}
