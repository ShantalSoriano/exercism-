export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color: string) => {
  let findColor: number = COLORS.indexOf(color);
  return findColor;
}


const colorGuide = (): string[] => {return COLORS};
