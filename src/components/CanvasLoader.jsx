import { Html, useProgress } from '@react-three/drei'
import { BeatLoader } from 'react-spinners'

const CanvasLoader = () => {
  const { progress } = useProgress()

  return (
    <Html
      as='div'
      center
      className='flex flex-col items-center justify-center w-full h-full gap-4 bg-black bg-opacity-50'
    >
      <BeatLoader color='#8954F1' size={20} />

      <div className='w-3/4 mt-4'>
        <progress
          className='progress progress-primary w-full'
          value={progress}
          max='100'
        ></progress>
      </div>
    </Html>
  )
}

export default CanvasLoader
