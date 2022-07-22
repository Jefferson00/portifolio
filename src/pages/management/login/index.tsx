import { CSSProperties, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import api from "../../../services/api";

const styles = {
  div: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  input: {
    border: "none",
    outline: "none",
    borderRadius: 8,
    padding: "0.5rem",
    width: 280,
  },
  button: {
    width: 280,
    borderRadius: 8,
    backgroundColor: "#f59d19",
    color: "#f2f2f2",
    border: "none",
    padding: "0.5rem",
  },
};

export default function Login() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log(process.env.NEXT_PUBLIC_APP_URL);
      const res = await api.post("/", { password });

      if (res.data) {
        setCookie(undefined, "@JeffersonDev:token", res.data, {
          maxAge: 60 * 60 * 60 * 1,
          path: "/",
        });

        router.push("/management");
      } else {
        alert("sai fora porra");
      }
    } catch (error) {}
  };

  return (
    <div style={styles.div as CSSProperties}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Entrar
      </button>
    </div>
  );
}
