import * as React from 'react';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * AuthLayout provides a consistent centered layout for authentication pages.
 * It features a full-screen colored background with a centered card to hold
 * authentication forms or messages.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the card, typically a form.
 * @param {string} [className] - Optional additional class names to apply to the Card component.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    // Main container to center content, with a fallback padding for smaller screens.
    <main className="flex items-center justify-center h-screen bg-background p-4">
      {/* Card provides the white container for the form. w-96 is specified in requirements. */}
      <Card className={cn('w-96', className)}>
        {/* CardContent provides padding around the children. p-8 gives ample space that matches the visual. */}
        <CardContent className="p-8">
          {children}
        </CardContent>
      </Card>
    </main>
  );
};

export default AuthLayout;
