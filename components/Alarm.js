import React from 'react'

// eslint-disable-next-line react/display-name
const Alarm = React.forwardRef((_, ref) => {
    return (
        <audio ref={ref}>
            <source src= '/sound.mp3' type="audio/mp3" />
        </audio>
    )
})


export default Alarm
