import * as React from 'react';

import AuthLayout from '@/components/layout/AuthLayout';
import LoginForm from '@/components/Auth/LoginForm';

/**
 * The main login page for the application.
 * This page composes the AuthLayout and the LoginForm to create the complete
 * user authentication experience as seen in the reference design.
 */
const IndexPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default IndexPage;
