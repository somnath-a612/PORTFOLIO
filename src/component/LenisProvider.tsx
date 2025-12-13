import ReactLenis from "lenis/react"
import type { ReactNode } from "react"


function LenisProvider({children}: {children: ReactNode}) {
  return (
    <ReactLenis root options={{lerp: 0.2, duration: 1}}>{children}</ReactLenis>
  )
}

export default LenisProvider