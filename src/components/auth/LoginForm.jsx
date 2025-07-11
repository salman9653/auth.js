"use client";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/zodSchema";
import { loginAction } from "@/actions/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/CardWrapper";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import { loginFields } from "@/schemas/formFields";
import { useRouter, useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");

  useEffect(() => {
    if (urlError) {
      router.push("/authError");
    }
  }, [urlError]);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const onSubmit = async (formValues) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      loginAction(formValues).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcom Back"
      backButtonLabel="Don't have an accounts?"
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {loginFields?.map(({ name, label, type, placeholder }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={placeholder}
                        type={type}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
