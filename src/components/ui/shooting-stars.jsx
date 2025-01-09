'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState, useRef } from 'react'

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4) // Choisit un côté aléatoire (0: haut, 1: droite, 2: bas, 3: gauche)
  const offsetX = Math.random() * window.innerWidth // Position horizontale aléatoire
  const offsetY = Math.random() * window.innerHeight // Position verticale aléatoire

  switch (side) {
    case 0: // Haut
      return { x: offsetX, y: 0, angle: Math.random() * 90 + 45 } // Entre 45° et 135°
    case 1: // Droite
      return {
        x: window.innerWidth,
        y: offsetY,
        angle: Math.random() * 90 + 135,
      } // Entre 135° et 225°
    case 2: // Bas
      return {
        x: offsetX,
        y: window.innerHeight,
        angle: Math.random() * 90 + 225,
      } // Entre 225° et 315°
    case 3: // Gauche
      return { x: 0, y: offsetY, angle: Math.random() * 90 + 315 } // Entre 315° et 45° (reboucle)
    default:
      return { x: 0, y: 0, angle: 45 }
  }
}

export const ShootingStars = ({
  minSpeed = 20,
  maxSpeed = 60,
  minDelay = 1500,
  maxDelay = 4200,
  starColor = '#9E00FF',
  trailColor = '#2EB9DF',
  starWidth = 10,
  starHeight = 0.8,
  className,
}) => {
  const [star, setStar] = useState(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint()
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      }
      setStar(newStar)

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
      setTimeout(createStar, randomDelay)
    }

    createStar()

    return () => {}
  }, [minSpeed, maxSpeed, minDelay, maxDelay])

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar(prevStar => {
          if (!prevStar) return null
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180)
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180)
          const newDistance = prevStar.distance + prevStar.speed
          const newScale = 1 + newDistance / 100
          if (
            newX < -20 ||
            newX > window.innerWidth + 20 ||
            newY < -20 ||
            newY > window.innerHeight + 20
          ) {
            return null
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          }
        })
      }
    }

    const animationFrame = requestAnimationFrame(moveStar)
    return () => cancelAnimationFrame(animationFrame)
  }, [star])

  return (
    <svg
      ref={svgRef}
      className={cn('w-screen h-screen fixed top-0 left-0 z-[-1]', className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill='url(#gradient)'
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset='100%'
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
