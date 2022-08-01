import styles from "../styles/components/HeaderBackground.module.css";
import { Icons } from "./Icons";

export function HeaderBackground() {
  const renderRows = () => {
    let rows = [];
    const size = 80;
    for (let i = 1; i <= 20; i++) {
      rows.push(
        <div className={styles.row} key={i}>
          <div>
            <Icons name="iconFirebase" size={size} />
            <Icons name="iconHTML" size={size} />
            <Icons name="iconJavascript" size={size} />
            <Icons name="iconMongoDB" size={size} />
            <Icons name="iconNext" size={size} />
            <Icons name="iconNode" size={size} />
            <Icons name="iconTypescript" size={size} />
            <Icons name="iconReact" size={size} />
            <Icons name="iconPostgres" size={size} />
            <Icons name="iconGraphql" size={size} />
            <Icons name="iconCss" size={size} />
            <Icons name="iconGit" size={size} />
            <Icons name="iconJavascript" size={size} />
            <Icons name="iconMySql" size={size} />
            <Icons name="iconNest" size={size} />
            <Icons name="iconNode" size={size} />
            <Icons name="iconTypescript" size={size} />
            <Icons name="iconReact" size={size} />
            <Icons name="iconPostgres" size={size} />
            <Icons name="iconSqlite" size={size} />
          </div>
          <div>
            <Icons name="iconFirebase" size={size} />
            <Icons name="iconHTML" size={size} />
            <Icons name="iconJavascript" size={size} />
            <Icons name="iconMongoDB" size={size} />
            <Icons name="iconNext" size={size} />
            <Icons name="iconNode" size={size} />
            <Icons name="iconTypescript" size={size} />
            <Icons name="iconReact" size={size} />
            <Icons name="iconPostgres" size={size} />
            <Icons name="iconGraphql" size={size} />
            <Icons name="iconCss" size={size} />
            <Icons name="iconGit" size={size} />
            <Icons name="iconJavascript" size={size} />
            <Icons name="iconMySql" size={size} />
            <Icons name="iconNest" size={size} />
            <Icons name="iconNode" size={size} />
            <Icons name="iconTypescript" size={size} />
            <Icons name="iconReact" size={size} />
            <Icons name="iconPostgres" size={size} />
            <Icons name="iconSqlite" size={size} />
          </div>
        </div>
      );
    }
    return rows;
  };
  return (
    <section className={styles.container}>
      {renderRows()}
      <div className={styles.effect}></div>
    </section>
  );
}
