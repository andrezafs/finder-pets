import { InputAccount } from "../InputAccont";

export function FormCreateAccount({ title }: { title: string }) {
  return (
    <div>
      <h1 className="font-inter text-2xl font-semibold text-brown text-center">
        {title}
      </h1>
      <form className="flex flex-col gap-2">
        <InputAccount
          htmlFor="email"
          type="email"
          label="Email Address"
          name="email"
          id="email"
        />
        <InputAccount
          htmlFor="nameUser"
          type="text"
          label="Name"
          name="nameUser"
          id="nameUser"
        />
        <InputAccount
          htmlFor="userNameUser"
          type="text"
          label="Username"
          name="userNameUser"
          id="userNameUser"
        />
        <InputAccount
          htmlFor="password"
          type="password"
          label="Password"
          name="password"
          id="password"
        />
      </form>
    </div>
  );
}
