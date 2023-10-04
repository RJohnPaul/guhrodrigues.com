export function Texture() {
  return (
    <svg className="fixed top-0 left-0 z-[999] w-full h-screen opacity-25 brightness-[60%] contrast-[60%] pointer-events-none">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  )
}
