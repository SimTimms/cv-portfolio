export default function addMouseListener(
  divRef: HTMLDivElement,
  callBackFunction: (x: number, y: number) => void
) {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    divRef && callBackFunction(x, y);
  });
}
