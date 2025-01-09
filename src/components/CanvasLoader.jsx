'use client'

import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()

  return (
    <Html
      as='div'
      center
      className='flex flex-col items-center justify-center w-full h-full gap-4 bg-black bg-opacity-50'
    >
      <span
        className='loading loading-spinner text-primary'
        style={{ height: '3rem', width: '3rem' }}
      />

      <div className='w-3/4 mt-4'>
        <progress
          className='progress progress-primary w-full'
          value={progress}
          max='100'
        ></progress>
      </div>

      <p className='text-lg font-bold text-white'>
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Chargement...'}
      </p>
    </Html>
  )
}

export default CanvasLoader
