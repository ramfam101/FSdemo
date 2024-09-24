import React from "react";
import styles from "./Second.module.css"
import { useNavigate } from "react-router-dom";

export default function Second(){
    const navigate = useNavigate();

    return(
        <div className={styles.outerBox}>
            <div id={styles.topHalf}>
                <div className={styles.topLeft}>
                    topL
                </div>
                <div className={styles.topRight}>
                    topR
                </div>
            </div>
            <div id={styles.bottomHalf}>
                <div className={styles.bottomLeft}>
                    botL
                </div>
                <div className={styles.bottomRight}>
                    botR
                </div>
            </div>
            <div className={styles.bottomNav}>
                <div 
                    className={styles.leftNav}
                    onClick={() => navigate("/")}
                >
                    Go to Home
                </div>
                <div 
                    className={styles.rightNav}
                    onClick={() => navigate("/third")}
                >
                    Go to Third Page
                </div>
            </div>
    </div>
    )
}