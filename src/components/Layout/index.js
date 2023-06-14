import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
const Layout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
