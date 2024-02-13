import  React, { useState , useEffect } from 'react'

export const DateTime = () => {
    const [date, setDate] = useState(new Date());
    const [dateAndTime, setDateAndTime] = useState('');
    
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    const handleClick = () => {
        setDateAndTime(date.toLocaleString('en-US',{hour12: true, year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'}))
    }

    return(
        <div className='d-flex gap-5'>
            <div>
                <p>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            </div>
            <div>
                <p>{date.toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default DateTime