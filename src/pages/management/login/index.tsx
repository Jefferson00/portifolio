import { useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/router";
import api from "../../../services/api";

export default function Login() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
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
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
