export default function addMouseListener(
  callBackFunction: (x: number, y: number) => void
) {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    callBackFunction(x, y);
  });
}
