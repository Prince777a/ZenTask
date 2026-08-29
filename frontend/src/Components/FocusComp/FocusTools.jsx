import styles from "../FocusComp/FocusTools.module.css";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { MdOutlineBlock } from "react-icons/md";
import { GiChestnutLeaf } from "react-icons/gi";


import { useEffect, useState } from 'react'

const FocusTools = () => {

    const quotes = [
        "One step at a time . You are doing great " ,
        "Small steps, steady progress is the goal",
        "Stay with it bro , Focus compunds in end.",
        "Release your tension from your shoulders. ",
        "The work flows through you effortlessly bro."
    ]

    const [quoteindex , setQuoteIndex] = useState(0);
    
    useEffect( () => {

        const interval = setInterval(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 7000);

        return () => clearInterval(interval); // cleanup function required

    } , [])
   



  return (
    <>

         <div className={styles.container}>
        
            <div className={styles.tools}>
                <span className={styles.label}>
                    <IoMusicalNoteSharp className={styles.music_icon} />
                    Sounds
                </span>
            </div>
            <div className={styles.tools}>
                <span className={styles.label}>
                <MdOutlineBlock className={styles.music_icon}/>
                
                Distraction
                </span>
            </div>

    </div>

    <div className={styles.quote}>
        <span> <GiChestnutLeaf className={styles.leaf_icon} /> </span>
        <span key={quoteindex} className={styles.quote_text}> {quotes[quoteindex]}</span>
    </div>
    </>
   
  )
}

export default FocusTools;