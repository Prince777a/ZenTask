import { useEffect, useState  , } from "react";

function TimerCard({data}) {
    console.log("Timer card data" , data);

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    // const [inputMin, setInputMin] = useState(25);

    //useEffect Timer

    useEffect( () => {
        let timer ;

        if (isRunning) {
            timer = setInterval ( () => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if(minutes > 0) {
                    setMinutes(minutes - 1);
                    // setSeconds(59);
                } else {
                    setIsRunning(false);
                }
            } , 1000)
            
        }

        return () => clearInterval(timer);

    } , [isRunning , minutes , seconds]);

    // function handleStart() {
    //     setMinutes(25);
    //     setSeconds(0);
    //     isRunning(true);
    // }
    
    return (
        <>
            <div>
                <h1>{minutes} : {seconds} </h1>

                <p> FOCUSING ON </p>
                <h2>{data.title}</h2>

                {/* <button onClick={handleStart}>Sart</button> */}
                <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pause" : "Resume"}
            </button>

            </div>
        </>
    )
}
export default TimerCard;