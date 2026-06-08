import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface InteractiveRobotSplineProps { scene: string; className?: string }

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  return (
    <Suspense fallback={<div className={`w-full h-full flex items-center justify-center bg-[#fff8e8] text-[#3b2f1e] ${className || ''}`}>Loading 3D...</div>}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
