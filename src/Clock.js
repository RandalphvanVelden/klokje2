import { useEffect, useState } from 'react';



function Clock(){
    const [date, setDate] = useState(new Date());
 //   new Date().toLocaleTimeString('en-US')
//1:29:33 PM
    
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);

    return (
      <span>
        {date.toLocaleTimeString()}
      </span>
    );
  }
  export default Clock;

  