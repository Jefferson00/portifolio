import styles from "../styles/project.module.css";

export function setIconClass(techClass: string) {
  switch (techClass) {
    case "iconReact":
      return styles.iconReact;
    case "iconNode":
      return styles.iconNode;
    case "iconJavascript":
      return styles.iconJavascript;
    case "iconTypescript":
      return styles.iconTypescript;
    case "iconCss":
      return styles.iconCss;
    case "iconHtml":
      return styles.iconHtml;
    case "iconNext":
      return styles.iconNext;
    case "iconSql":
      return styles.iconSql;
    case "iconPostgres":
      return styles.iconPostgres;
    case "iconSqlite":
      return styles.iconSqlite;
    case "iconHTML":
      return styles.iconHtml;
    case "iconNest":
      return styles.iconNest;
    case "iconPrisma":
      return styles.iconPrisma;
    default:
      break;
  }
}
