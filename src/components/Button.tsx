import "../index.css";

type ButtonClickFunction = (
  event?: React.MouseEvent<HTMLButtonElement>
) => void;

interface Props {
  onClick?: ButtonClickFunction; // Optional with question mark
  children?: React.ReactNode;
}

export const Button = (props: Props) => {
  return (
    <>
      <button onClick={props.onClick} {...props}>
        {props.children}
      </button>
    </>
  );
};
