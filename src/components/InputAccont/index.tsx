export function InputAccount({
  htmlFor,
  type,
  label,
  name,
  id,
}: {
  htmlFor: string;
  type: string;
  label: string;
  name: string;
  id: string;
}) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="font-inter text-sm font-semibold text-brown"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border-solid border border-gray-100 rounded-lg outline-none py-3 px-4 w-80"
      />
    </>
  );
}
