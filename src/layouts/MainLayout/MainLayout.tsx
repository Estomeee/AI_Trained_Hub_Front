import { FC, PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";

interface Props extends PropsWithChildren {}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <PageHeader />
      <main className={styles.pageContent}>{children}</main>
    </div>
  );
};
