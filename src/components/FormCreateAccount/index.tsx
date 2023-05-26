/* eslint-disable @typescript-eslint/no-misused-promises */

import { zodResolver } from "@hookform/resolvers/zod";
import { InputAccount } from "../InputAccont";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FormCreateAccountProps {
  title: string;
}
interface FormFields {
  email: string;
  name: string;
  username: string;
  password: string;
}

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  name: z.string(),
  username: z
    .string()
    .min(3, { message: "Mínimo 3 caracteres" })
    .max(10, { message: "Máximo 10 caracteres" }),
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
        message: "Senha deve conter letras maiúsculas, minúsculas e números",
      }
    ),
});

export function FormCreateAccount({ title }: FormCreateAccountProps) {
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
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <InputAccount
          {...register("email")}
          type="email"
          label="Email Address"
          id="email"
          error={errors.email?.message}
        />
        <InputAccount
          {...register("name")}
          type="text"
          label="Name"
          id="name"
          error={errors.name?.message}
        />

        <InputAccount
          {...register("username")}
          type="text"
          label="Username"
          id="username"
          error={errors.username?.message}
        />

        <InputAccount
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
