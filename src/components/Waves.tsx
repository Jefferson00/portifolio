import styles from "../styles/components/Waves.module.css";
import { useSpring, animated, config, easings } from "react-spring";

export function Waves() {
  const { x } = useSpring({
    config: { duration: 4000, easing: easings.easeInOutCirc },
    loop: { reverse: true },
    from: {
      x: 0,
    },
    to: {
      x: 1,
    },
  });

  return (
    <div className={styles.waves}>
      <svg
        id="visual"
        viewBox="0 0 2560 400"
        width="2560"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g stroke-width="1" stroke-linejoin="bevel">
          <path
            d="M1075.9 142L1064.9 247L1088.9 273Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1088.9 273L1047.9 391L1148.6 364Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1254.6 345L1257.6 159L1088.9 273Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1310.4 140L1260.6 139L1257.6 159Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1257.6 159L1075.9 142L1088.9 273Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M1260.6 139L1075.9 142L1257.6 159Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M1254.6 345L1377.4 244L1257.6 159Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M1377.4 244L1310.4 140L1257.6 159Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1064.9 247L1047.9 391L1088.9 273Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M1148.6 364L1256.6 540L1254.6 345Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M936.2 330L1047.9 391L1064.9 247Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1361.4 320L1377.4 244L1254.6 345Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M1361.4 320L1433.1 257L1377.4 244Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M1377.4 244L1500.1 212L1310.4 140Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M924.2 211L936.2 330L1064.9 247Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1090.9 0L1010.2 74L1075.9 142Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M1075.9 142L924.2 211L1064.9 247Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1090.9 0L1075.9 142L1260.6 139Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1010.2 74L924.2 211L1075.9 142Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1080.9 540L1148.6 364L1047.9 391Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1080.9 540L1256.6 540L1148.6 364Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M1254.6 345L1388.4 496L1361.4 320Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M1361.4 320L1496.1 401L1433.1 257Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1335.4 0L1245.6 0L1310.4 140Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1310.4 140L1245.6 0L1260.6 139Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M936.2 330L987.2 476L1047.9 391Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M987.2 476L1080.9 540L1047.9 391Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1245.6 0L1090.9 0L1260.6 139Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1256.6 540L1311.4 540L1254.6 345Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1311.4 540L1388.4 496L1254.6 345Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1485.1 54L1335.4 0L1310.4 140Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1496.1 401L1500.1 212L1433.1 257Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1433.1 257L1500.1 212L1377.4 244Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1388.4 496L1496.1 401L1361.4 320Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M760.4 207L847.4 264L757.4 167Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M924.2 211L847.4 264L936.2 330Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M785.4 489L937.2 540L987.2 476Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M785.4 489L987.2 476L936.2 330Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M987.2 476L937.2 540L1080.9 540Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1500.1 212L1485.1 54L1310.4 140Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1485.1 54L1455.1 0L1335.4 0Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1090.9 0L909.2 0L1010.2 74Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M1010.2 74L909.2 0L924.2 211Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1585.8 540L1592.8 368L1496.1 401Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M1496.1 401L1592.8 368L1500.1 212Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M1500.1 212L1627.8 140L1485.1 54Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1311.4 540L1517.1 540L1388.4 496Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1388.4 496L1517.1 540L1496.1 401Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M757.4 167L847.4 264L924.2 211Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M847.4 264L785.4 489L936.2 330Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M909.2 0L757.4 167L924.2 211Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M730.7 299L785.4 489L847.4 264Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1652.8 419L1643.8 277L1592.8 368Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1592.8 368L1643.8 277L1500.1 212Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1485.1 54L1625.8 0L1455.1 0Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M760.4 207L730.7 299L847.4 264Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M707.7 172L730.7 299L760.4 207Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1643.8 277L1627.8 140L1500.1 212Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M909.2 0L800.4 0L757.4 167Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1517.1 540L1585.8 540L1496.1 401Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M785.4 489L782.4 540L937.2 540Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M615.7 540L782.4 540L785.4 489Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1585.8 540L1652.8 419L1592.8 368Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M693.7 0L707.7 172L757.4 167Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M757.4 167L707.7 172L760.4 207Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M1733.6 0L1625.8 0L1627.8 140Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1627.8 140L1625.8 0L1485.1 54Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M557.9 346L667.7 389L730.7 299Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M730.7 299L667.7 389L785.4 489Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M1746.6 324L1714.6 186L1643.8 277Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1643.8 277L1714.6 186L1627.8 140Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M1652.8 419L1746.6 324L1643.8 277Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M1823.3 391L1746.6 324L1652.8 419Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M800.4 0L693.7 0L757.4 167Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M707.7 172L590.9 177L730.7 299Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1585.8 540L1710.6 498L1652.8 419Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1585.8 540L1710.6 540L1710.6 498Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M1710.6 498L1823.3 391L1652.8 419Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M693.7 0L616.7 96L707.7 172Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M616.7 96L590.9 177L707.7 172Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M557.9 346L601.9 438L667.7 389Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M667.7 389L615.7 540L785.4 489Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1770.6 83L1733.6 0L1627.8 140Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M1770.6 83L1627.8 140L1714.6 186Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1837.3 167L1770.6 83L1714.6 186Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M601.9 438L615.7 540L667.7 389Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M590.9 177L557.9 346L730.7 299Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M601.9 438L478.9 540L615.7 540Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M616.7 96L570.9 77L590.9 177Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M590.9 177L444.2 357L557.9 346Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M559.9 0L570.9 77L616.7 96Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M1904.3 478L1823.3 391L1710.6 498Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M1746.6 324L1837.3 167L1714.6 186Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M1875.3 169L1837.3 167L1746.6 324Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M1770.6 83L1865.3 0L1733.6 0Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M693.7 0L559.9 0L616.7 96Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M392.2 165L444.2 357L590.9 177Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1823.3 391L1875.3 169L1746.6 324Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M1837.3 167L1865.3 0L1770.6 83Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M1875.3 169L1865.3 0L1837.3 167Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M1891.3 540L1904.3 478L1710.6 498Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M1823.3 391L2034.1 315L1875.3 169Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M1875.3 169L2029.1 106L1865.3 0Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M392.2 165L590.9 177L570.9 77Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M557.9 346L444.2 357L601.9 438Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M1710.6 540L1891.3 540L1710.6 498Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M444.2 357L478.9 540L601.9 438Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M375.2 99L392.2 165L570.9 77Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M444.2 357L375.2 419L478.9 540Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M286.5 342L375.2 419L444.2 357Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M392.2 0L375.2 99L570.9 77Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M392.2 165L311.5 185L444.2 357Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M559.9 0L392.2 0L570.9 77Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M2026.1 416L1823.3 391L1904.3 478Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M2026.1 416L2034.1 315L1823.3 391Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2045.1 540L2026.1 416L1904.3 478Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2059.1 195L2029.1 106L1875.3 169Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M316.5 461L366.2 540L375.2 419Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M375.2 419L366.2 540L478.9 540Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M392.2 0L332.5 99L375.2 99Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M375.2 99L332.5 99L392.2 165Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M2099.8 253L2059.1 195L2034.1 315Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2034.1 315L2059.1 195L1875.3 169Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M332.5 99L311.5 185L392.2 165Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M286.5 342L316.5 461L375.2 419Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M316.5 461L335.5 540L366.2 540Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M1891.3 540L2045.1 540L1904.3 478Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M2195.8 373L2099.8 253L2034.1 315Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M311.5 185L286.5 342L444.2 357Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M316.5 461L112.7 540L335.5 540Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2195.8 373L2034.1 315L2026.1 416Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M2111.8 0L2060.1 0L2131.8 76Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M2029.1 106L2060.1 0L1865.3 0Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2060.1 0L2029.1 106L2131.8 76Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M149.7 58L138.7 170L311.5 185Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M311.5 185L138.7 170L286.5 342Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M392.2 0L303.5 0L332.5 99Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2045.1 540L2097.8 540L2026.1 416Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M2131.8 76L2029.1 106L2059.1 195Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M2131.8 76L2059.1 195L2099.8 253Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M2224.5 277L2131.8 76L2099.8 253Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M2217.8 442L2195.8 373L2026.1 416Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2195.8 373L2224.5 277L2099.8 253Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M2131.8 76L2272.5 89L2111.8 0Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2097.8 540L2217.8 442L2026.1 416Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M2195.8 373L2272.5 422L2224.5 277Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M149.7 58L311.5 185L332.5 99Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M286.5 342L88.7 461L316.5 461Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M303.5 0L149.7 58L332.5 99Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M2283.5 540L2272.5 422L2217.8 442Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2217.8 442L2272.5 422L2195.8 373Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2317.5 265L2272.5 89L2224.5 277Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2224.5 277L2272.5 89L2131.8 76Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M0 314L87.7 358L0 226Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M138.7 170L87.7 358L286.5 342Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M88.7 461L112.7 540L316.5 461Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M87.7 358L88.7 461L286.5 342Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M2097.8 540L2283.5 540L2217.8 442Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M2272.5 422L2317.5 265L2224.5 277Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M2379.3 321L2317.5 265L2272.5 422Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M303.5 0L71.7 0L149.7 58Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M149.7 58L0 45L138.7 170Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M87.7 358L0 368L88.7 461Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M2272.5 89L2339.5 0L2111.8 0Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2390.3 139L2339.5 0L2272.5 89Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M0 226L87.7 358L138.7 170Z"
            fill="#14181b"
            stroke="#14181b"
          ></path>
          <path
            d="M88.7 461L0 540L112.7 540Z"
            fill="#20282d"
            stroke="#20282d"
          ></path>
          <path
            d="M0 45L0 226L138.7 170Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M0 314L0 368L87.7 358Z"
            fill="#232a30"
            stroke="#232a30"
          ></path>
          <path
            d="M2399.3 485L2379.3 321L2272.5 422Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2317.5 265L2390.3 139L2272.5 89Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M71.7 0L0 45L149.7 58Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M2460.3 283L2390.3 139L2317.5 265Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M0 368L0 540L88.7 461Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path d="M71.7 0L0 0L0 45Z" fill="#252d33" stroke="#252d33"></path>
          <path
            d="M2283.5 540L2399.3 485L2272.5 422Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2379.3 321L2460.3 283L2317.5 265Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M2283.5 540L2410.3 540L2399.3 485Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M2560 369L2460.3 283L2379.3 321Z"
            fill="#1c2227"
            stroke="#1c2227"
          ></path>
          <path
            d="M2560 290L2460.3 283L2560 369Z"
            fill="#111518"
            stroke="#111518"
          ></path>
          <path
            d="M2390.3 139L2480.3 0L2339.5 0Z"
            fill="#181d21"
            stroke="#181d21"
          ></path>
          <path
            d="M2560 62L2480.3 0L2390.3 139Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
          <path
            d="M2560 369L2379.3 321L2399.3 485Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M2460.3 283L2560 225L2390.3 139Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2560 290L2560 225L2460.3 283Z"
            fill="#1e252a"
            stroke="#1e252a"
          ></path>
          <path
            d="M2560 540L2560 369L2399.3 485Z"
            fill="#161a1e"
            stroke="#161a1e"
          ></path>
          <path
            d="M2560 225L2560 62L2390.3 139Z"
            fill="#273036"
            stroke="#273036"
          ></path>
          <path
            d="M2410.3 540L2560 540L2399.3 485Z"
            fill="#252d33"
            stroke="#252d33"
          ></path>
          <path
            d="M2560 62L2560 0L2480.3 0Z"
            fill="#1a1f24"
            stroke="#1a1f24"
          ></path>
        </g>
      </svg>
    </div>
  );
}
