import React from "react";

const ButtonPoseidon = ({ children, type, className = "", ...props }) => {
  const baseClasses =
    "btn-poseidon py-2 px-4 d-inline-flex align-items-center justify-content-center fw-bold";

  // 2. Definimos a variante de cor baseada no SCSS
  const variantClass =
    type === "primary" ? "btn-poseidon--primary" : "btn-poseidon--secondary";

  return (
    <button
      className={`${baseClasses} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPoseidon;
