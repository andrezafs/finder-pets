import React from "react";

interface ContainerScreenProps {
  children: React.ReactNode;
}

export function ContainerScreen({ children }: ContainerScreenProps) {
  return (
    <div className="grid grid-cols-1.5fr grid-rows-1 w-full h-screen items-center max-sm:px-4 max-lg:grid-cols-1 ">
      {children}
    </div>
  );
}
