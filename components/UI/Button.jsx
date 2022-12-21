export default function Button({
  className,
  onClick,
  disabled,
  children,
  ...other
}) {
  return (
    <button
      className={`${className} bg-blueColor text-whiteColor text-lg py-3 px-16 rounded-md`}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
}
