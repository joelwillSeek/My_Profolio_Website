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
      className={`hover:text-[#1C77C3] transition-colors duration-600 font-medium cursor-pointer p-2 rounded-md shadow-md  ${
        isActive ? "border-b-transparent" : "border-b-2"
      }`}
      onClick={() => onClick()}
      style={{
        backgroundColor: isActive
          ? ColorTheme.orangeAccentColor
          : ColorTheme.whiteTextColor,

        //  color: isActive ?
        color: isActive ? ColorTheme.whiteTextColor : ColorTheme.blackTextColor, //: ColorTheme.blackTextColor,
      }}
    >
      {label}
    </button>
  );
}
