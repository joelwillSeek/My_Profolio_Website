import { useAppSelector } from "../../core/redux/store";
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
  const isLightTheme = useAppSelector(
    (state) => state.themeSlice.useLightTheme
  );
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
          : isLightTheme
          ? ColorTheme.whiteTextColor
          : ColorTheme.darkBackgroundTheme,

        //  color: isActive ?
        color: isActive
          ? ColorTheme.whiteTextColor
          : isLightTheme
          ? ColorTheme.blackTextColor
          : ColorTheme.whiteTextColor, //: ColorTheme.blackTextColor,
      }}
    >
      {label}
    </button>
  );
}
