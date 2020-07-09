export function getColorFromId(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 3) - hash);
  }

  const color = Math.abs(hash).toString(16).substring(0, 6);

  return "#" + "000000".substring(0, 6 - color.length) + color;
}
