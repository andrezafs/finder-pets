/* eslint-disable @typescript-eslint/no-misused-promises */

import { InputAccount } from "../InputAccont";
import { useForm } from "react-hook-form";

interface FormCreateAccountProps {
  title: string;
}
export function FormCreateAccount({ title }: FormCreateAccountProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <h1 className="font-inter text-2xl font-semibold text-brown text-center">
        {title}
      </h1>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <InputAccount
          {...register("email", { required: true })}
          htmlFor="email"
          type="email"
          label="Email Address"
          name="email"
          id="email"
        />
        {errors.email != null && <span>E-mail is required</span>}
        <InputAccount
          {...register("nameUser", {
            required: true,
            minLength: {
              value: 3,
              message: "Min length is 3",
            },
            maxLength: {
              value: 20,
              message: "Max length is 20",
            },
          })}
          htmlFor="nameUser"
          type="text"
          label="Name"
          name="nameUser"
          id="nameUser"
        />
        {errors.nameUser != null && <span>Name is required</span>}
        <InputAccount
          {...register("userNameUser", { required: true })}
          htmlFor="userNameUser"
          type="text"
          label="Username"
          name="userNameUser"
          id="userNameUser"
        />
        {errors.userNameUser != null && <span>Username is required</span>}
        <InputAccount
          {...register("password", { required: true })}
          htmlFor="password"
          type="password"
          label="Password"
          name="password"
          id="password"
        />
        {errors.password != null && <span>Password is required</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
