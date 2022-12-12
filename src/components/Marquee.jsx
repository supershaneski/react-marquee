import React from 'react';
import './Marquee.css'

const Marquee = ({ children }) => {

    const container = React.useRef()
    const marquee = React.useRef()

    const [left, setLeft] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLeft((prev) => {
                let left = prev;
                left--;
                if (left < -marquee.current.clientWidth) {
                    left = container.current.clientWidth;
                }
                return left
            })
        }, 30)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            ref={container}
            className="marquee-container"
        >
            <div
            ref={marquee}
            className="marquee"
            style={{ 
                left: `${left}px`,
            }}
            >
            {children}
            </div>
        </div>
    )
}

export default Marquee