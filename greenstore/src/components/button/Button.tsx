import ButtonDto from "../../models/components/ButtonDto";

const Button = (props: ButtonDto) => {
  return <button>{props.title}</button>;
};

export default Button;
