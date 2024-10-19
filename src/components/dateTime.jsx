import { useState, useEffect } from 'react';

function Datetime() {
    const [isDay, setIsDay] = useState(true);

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();

        if (hours >= 6 && hours <= 18) {
            setIsDay(true)
        } else {
            setIsDay(false)
        }
    }, []);

    return (
            <div id="datetime">
                <p>if its night this will show &quot;good afternoon&quot;, and if its day this will show &quot;good morning&quot;</p>
                {isDay ? <p>Good morning</p> : <p>Good afternoon</p>}
            </div>
    )
}

export default Datetime