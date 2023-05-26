export function Terms() {
  return (
    <div className="flex flex-col gap-3 pb-6">
      <p className="font-inter font-normal text-xs text-brown text-center max-w-xs">
        By clicking the “Sign up” button, you agree to Finder Pet{" "}
        <a href="#" className="text-pink font-semibold">
          Terms of Service
        </a>{" "}
        and confirm that you have read our{" "}
        <a href="#" className="text-pink font-semibold">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
