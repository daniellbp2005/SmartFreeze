import styles from"./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img src="/img/snowflake.png" alt="Logo" className={styles.logo} />
                    <p className={styles.titulo}>SmartFreeze</p>
                </div>
                <div className={styles.perfil}>
                    
                </div>
            </header>
        </>
    );
}