
import { TypeAnimation } from 'react-type-animation'

const Cycletext = () => {
  return (
    <TypeAnimation
      sequence={[
        'muay thai.',
        2000,
        'tennis.',
        2000,
        'hiking.',
        2000,
        'playing guitar.'
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', color: '#77B4D4' }}
    />
  )
}

export default Cycletext
