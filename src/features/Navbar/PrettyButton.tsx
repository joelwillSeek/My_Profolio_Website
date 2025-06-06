import ColorTheme from "../Theme/ColorTheme";

export default function PrettyButton({
  onClick,
  label,
  isActive,
}: {
  onClick: Function;
  label: string;
  isActive: boolean;
}) {
  return (
    //
    <button
      //   href="#home"//
      className={`hover:text-[#1C77C3] transition-colors duration-300 font-bold cursor-pointer p-2 rounded-3xl`}
      onClick={() => onClick()}
      style={{
        backgroundColor: isActive
          ? ColorTheme.orangeAccentColor
          : "transparent",
        color: isActive ? ColorTheme.whiteTextColor : ColorTheme.blackTextColor,
      }}
    >
      {label}
    </button>
  );
}
