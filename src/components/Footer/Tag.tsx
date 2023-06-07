interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  return (
    <span className="font-inter font-medium text-xl text-gray-300">{tag}</span>
  );
}
