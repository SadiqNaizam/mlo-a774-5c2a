import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the validation schema for the form
const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize the form with react-hook-form and Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Define the submit handler
  const onSubmit = React.useCallback((values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log('Form Submitted:', values);

    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you would handle success/error states here.
      // For example, show a toast notification.
    }, 2000);
  }, []);

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-card-foreground">Welcome</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground font-normal">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="h-auto bg-transparent border-0 border-b rounded-none border-input px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground font-normal">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-auto bg-transparent border-0 border-b rounded-none border-input px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="button"
            variant="link"
            className="px-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary"
          >
            Forgot Password
          </Button>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </form>
      </Form>

      <p className="text-sm text-center text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Button variant="link" className="p-0 h-auto font-medium text-primary">
          SignUp
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
