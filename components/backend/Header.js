import React from 'react'
import styles from '../../styles/backend/Header.module.scss'

const Header = () => {
    return (
        <div>
            <div className={styles.nav}>
                <h1>Legal <strong>Corner</strong></h1>
                <div className={styles.items}>
                    <p>Welcome, <strong>Saqlain</strong></p>
                    <img src="https://pbs.twimg.com/profile_images/1209556062270963712/qmftSQI9_400x400.jpg" alt="missing" />
                </div>
                
            </div>
        </div>
    )
}

export default Header
