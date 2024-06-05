import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./PageHeader.module.scss";

export const PageHeader: FC = () => {
  return (
    <header className={styles.cont}>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          {"AI Trained Hub"}
        </Link>
      </div>
    </header>
  );
};
