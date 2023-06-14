import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./layout.module.scss";
const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
