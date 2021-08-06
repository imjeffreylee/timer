import { useEffect, useState } from "react"

const Timer = () => {
  const [time, setTime] = useState(0);
  const [switcher, setSwitcher] = useState(false);

  useEffect(() => {
    if (switcher) {
      setTimeout(() => {
        setTime(time + 1)
      }, 1000)
    }
  }, [time, switcher])

  return (
    <div>
      {time}
      <button onClick={() => setSwitcher(switcher ? false : true)}>
        {switcher ? 'pause' : 'start'}
      </button>
      <button onClick={() => setTime(0)}>
        reset
      </button>
    </div>
  )
}

export default Timer
