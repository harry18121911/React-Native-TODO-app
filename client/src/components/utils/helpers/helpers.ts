import { IColor, IIcon } from "../../../types"
import { nanoid } from "nanoid/non-secure"
const palette = {
  red500: "#ef4444",
  red600: "#dc2626",
  orange300: "#fdba74",
  orange400: "#fb923c",
  green500: "#22c55e",
  green600: "#16a34a",
  sky400: "#38bdf8",
  sky500: "#0ea5e9",
  purple500: "#a855f7",
  purple600: "#9333ea",
}

const ICON_SET = {
  seed: "🌱",
  fries: "🍟",
  pizza: "🍕",
  rocket: "🚀",
  grinning: "😀",
  partying_face: "🥳",
  beach_umbrella: "🏖️",
}

export const getColors = () =>{
  const colors: IColor[] = Object.keys(palette).map(_paletteItem =>{
    return {
      id:`color_${nanoid()}`,
      code: palette[_paletteItem as keyof typeof palette],
      name: _paletteItem
    }
  })
  return colors
}

export const getIcons = () =>{
  const icons : IIcon[] = Object.keys(ICON_SET).map(_icon=>{
    return {
      id: `icon_${nanoid()}`,
      name: _icon,
      symbol: ICON_SET[_icon as keyof typeof ICON_SET]
    }
  })
  return icons
}


