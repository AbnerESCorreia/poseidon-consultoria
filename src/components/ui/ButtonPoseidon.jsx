import { Button } from "react-bootstrap";
import "./button.scss";

const ButtonPoseidon = ({ children, variant = "primary", ...props }) => {
  const variantClass =
    variant === "primary" ? "btn-poseidon--primary" : "btn-poseidon--secondary";

  return (
    <Button className={`btn-poseidon ${variantClass} fw-bold`} {...props}>
      {children}
    </Button>
  );
};

export default ButtonPoseidon;
