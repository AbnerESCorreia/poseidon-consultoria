import { Button } from "react-bootstrap";

const ButtonPoseidon = ({ children, variant = "primary", ...props }) => {
  return (
    <Button
      className={`btn-poseidon btn-poseidon--${variant} fw-bold`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPoseidon;
