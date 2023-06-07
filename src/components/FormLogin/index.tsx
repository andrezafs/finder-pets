/* eslint-disable @typescript-eslint/no-misused-promises */

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../Input";

interface FormLoginProps {
  title: string;
}

interface FormFields {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, {
      message: "Mínimo 8 caracteres",
    })
    .refine(
      (value) =>
        value.match(/[A-Z]/) != null &&
        value.match(/[a-z]/) != null &&
        value.match(/[0-9]/),
      {
        message: "A Senha deve conter letras maiúsculas, minúsculas e números",
      }
    ),
});

export function FormLogin({ title }: FormLoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div>
      <h1 className="font-inter text-2xl font-semibold text-brown text-center m-10">
        {title}
      </h1>
      <form action="" className="flex flex-col gap-2" onSubmit={onSubmit}>
        <Input
          {...register("email")}
          type="email"
          label="Email Address"
          id="email"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          label="Password"
          id="password"
          error={errors.password?.message}
        />
      </form>
    </div>
  );
}
