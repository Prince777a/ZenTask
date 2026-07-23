import { useEffect, useState  , } from "react";
import styles from "../FocusComp/TimerCard.module.css";

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
                    setSeconds(59);
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

    const pad = (num) => String(num).padStart(2 , "0");
    
    return (
        <>
            <div className={styles.card}>
                <h1 className={styles.timer}>
                    {pad(minutes)}:{pad(seconds)}
                    
                </h1>

                <p className={styles.label}> FOCUSING ON </p>
                <h2 className={styles.title}>{data.title}</h2>

                {/* <button onClick={handleStart}>Sart</button> */}

                <div className={styles.actions}>
                    <button
                    className={styles.playBtn}
                    onClick={() => setIsRunning(!isRunning)}
                    aria-label={isRunning ? "Pause timer" : "Start timer"}
                    >
                    {isRunning ? "❚❚" : "▶"}
                </button>

                        <button className={styles.completeBtn} onClick={() => onComplete?.(data)}>
                            Complete Task
                        </button>

                </div>
                

            </div>
        </>
    )
}
export default TimerCard;