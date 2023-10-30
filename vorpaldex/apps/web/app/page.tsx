import Image from "next/image";
import { Card } from "../../../packages/ui";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
          <h1>
            Vorpal DEX platform
          </h1>
		  <h3>
		    Now researching
		  </h3>
    </main>
  );
}
