import { Button } from "react-bootstrap";

const ButtonPoseidon = ({ children, variant = "primary", ...props }) => {
  return (
    <Button
      className={`btn-poseidon btn-poseidon--${variant} fw-bold py-2 px-4`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPoseidon;
