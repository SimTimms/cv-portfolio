export default function changeBackground(
  x: number,
  y: number,
  divRef: HTMLDivElement
) {
  const oneDefault = 23;
  const oneRange = 20 * y;
  const twoDefault = 293;
  const twoRange = 20 * x;
  const threeDefault = 193;
  const threeRange = 20 * x * y;
  const colOne = `hsl(${oneDefault + oneRange}deg, 17%, 58%)`;
  const colTwo = `hsl(${twoDefault + twoRange}deg, 67%, 48%)`;
  const colThree = `hsl(${threeDefault + threeRange}deg, 37%, 28%)`;
  divRef.style.background = `linear-gradient(0deg,${colOne} 0%,${colTwo} 30%,${colThree} 100%)`;
}
