export default function Button({
  className,
  onClick,
  disabled,
  children,
  ...other
}) {
  return (
    <button
      className={`${className} text-lg w-[200px] h-[50px] rounded-md cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
}
