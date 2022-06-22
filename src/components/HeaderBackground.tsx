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
            <Icons name="CssIcon" size={size} />
            <Icons name="HtmlIcon" size={size} />
            <Icons name="JavascriptIcon" size={size} />
            <Icons name="MysqlIcon" size={size} />
            <Icons name="NextIcon" size={size} />
            <Icons name="NodejsIcon" size={size} />
            <Icons name="TypescriptIcon" size={size} />
            <Icons name="ReactIcon" size={size} />
            <Icons name="PostgresqlIcon" size={size} />
            <Icons name="SqliteIcon" size={size} />
            <Icons name="CssIcon" size={size} />
            <Icons name="HtmlIcon" size={size} />
            <Icons name="JavascriptIcon" size={size} />
            <Icons name="MysqlIcon" size={size} />
            <Icons name="NextIcon" size={size} />
            <Icons name="NodejsIcon" size={size} />
            <Icons name="TypescriptIcon" size={size} />
            <Icons name="ReactIcon" size={size} />
            <Icons name="PostgresqlIcon" size={size} />
            <Icons name="SqliteIcon" size={size} />
          </div>
          <div>
            <Icons name="CssIcon" size={size} />
            <Icons name="HtmlIcon" size={size} />
            <Icons name="JavascriptIcon" size={size} />
            <Icons name="MysqlIcon" size={size} />
            <Icons name="NextIcon" size={size} />
            <Icons name="NodejsIcon" size={size} />
            <Icons name="TypescriptIcon" size={size} />
            <Icons name="ReactIcon" size={size} />
            <Icons name="PostgresqlIcon" size={size} />
            <Icons name="SqliteIcon" size={size} />
            <Icons name="CssIcon" size={size} />
            <Icons name="HtmlIcon" size={size} />
            <Icons name="JavascriptIcon" size={size} />
            <Icons name="MysqlIcon" size={size} />
            <Icons name="NextIcon" size={size} />
            <Icons name="NodejsIcon" size={size} />
            <Icons name="TypescriptIcon" size={size} />
            <Icons name="ReactIcon" size={size} />
            <Icons name="PostgresqlIcon" size={size} />
            <Icons name="SqliteIcon" size={size} />
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
