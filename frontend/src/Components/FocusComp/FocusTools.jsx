
import styles from "../FocusComp/FocusTools.module.css";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { MdOutlineBlock } from "react-icons/md";
import { GiChestnutLeaf } from "react-icons/gi";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaTimes } from "react-icons/fa";

import { useEffect, useRef, useState } from 'react';

import calmSound from "../../assets/audio/Calm.mp3";
import focusSound from "../../assets/audio/Focus.mp3";
import krishnaSound from "../../assets/audio/Krishna.mp3";
import mindSound from "../../assets/audio/Mind.mp3";

const tracks = [
    { name: "Calm", src: calmSound },
    { name: "Focus", src: focusSound },
    { name: "Krishna", src: krishnaSound },
    { name: "Mind", src: mindSound }
];

const FocusTools = () => {

    const quotes = [
        "One step at a time . You are doing great.",
        "Small steps, steady progress is the goal.",
        "Stay with it bro , Focus compunds in end.",
        "Release your tension from your shoulders. ",
        "The work flows through you effortlessly bro."
    ];

    const [quoteindex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    // ---- Music modal state ----
    const [showPlayer, setShowPlayer] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, trackIndex]);

    const nextTrack = () => {
        setTrackIndex((prev) => (prev + 1) % tracks.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
    };

    const closeModal = () => {
        setShowPlayer(false);
        // setIsPlaying(false);
    };

    return (
        <>

        {/* audio files refrence to audioRef */}
        <audio ref={audioRef} src={tracks[trackIndex].src} loop />

            <div className={styles.container}>

                <div
                    className={styles.tools}
                    onClick={() => setShowPlayer(true)}
                >
                    <span className={styles.label}>
                        <IoMusicalNoteSharp className={styles.music_icon} />
                        Sounds
                    </span>
                </div>

                <div className={styles.tools}>
                    <span className={styles.label}>
                        <MdOutlineBlock className={styles.music_icon} />
                        Distraction
                    </span>
                </div>

            </div>

            <div className={styles.quote}>
                <span><GiChestnutLeaf className={styles.leaf_icon} /></span>
                <span key={quoteindex} className={styles.quote_text}>{quotes[quoteindex]}</span>
            </div>

            

            {showPlayer && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeBtn} onClick={closeModal}>
                            <FaTimes />
                        </button>

                        

                        <div className={styles.modalIcon}>
                            <IoMusicalNoteSharp />
                        </div>

                        <p className={styles.modalTrackName}>{tracks[trackIndex].name}</p>

                        <div className={styles.modalControls}>
                            <button onClick={prevTrack} className={styles.controlBtn}>
                                <FaStepBackward />
                            </button>

                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={styles.playBtnCircle}
                            >
                                {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>

                            <button onClick={nextTrack} className={styles.controlBtn}>
                                <FaStepForward />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FocusTools;