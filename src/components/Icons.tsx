export type IconNames =
  | "iconCss"
  | "iconNext"
  | "iconReact"
  | "iconHTML"
  | "iconJavascript"
  | "iconTypescript"
  | "iconNest"
  | "iconGraphql"
  | "iconPostgres"
  | "iconMySql"
  | "iconMongoDB"
  | "iconSqlite"
  | "iconNode";

interface IconsProps {
  name: IconNames;
  color?: string;
  size?: number;
  fill?: string;
}

export function Icons({ name, color = "#fff", size = 35, fill }: IconsProps) {
  const getIcon = () => {
    switch (name) {
      case "iconCss":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H35L31.8167 31.446L17.4617 35L3.18667 31.4446L0 0ZM28.4833 6.43563L6.51667 6.43125L6.87167 10.255L23.7467 10.2579L23.3217 14.2188H12.255L12.655 17.971H22.9583L22.3483 23.1087L17.4983 24.2812L12.5717 23.1L12.2583 20.0229H7.90833L8.39167 25.6448L17.5 28.1283L26.455 25.8971L28.4833 6.43708V6.43563Z" />
          </svg>
        );
      case "iconHTML":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L3.1852 31.5L17.4789 35L31.8098 31.4956L35 0H0.0024808H0ZM28.0665 10.3031H11.302L11.7014 14.2603H27.6696L26.4664 26.1209L17.4789 28.3172L8.50379 26.1209L7.89106 20.0528H12.2893L12.6019 23.1372L17.4814 24.2966L17.4913 24.2944L22.3733 23.1328L22.8794 18.1234H7.69509L6.51428 6.44H28.4609L28.069 10.3031H28.0665Z" />
          </svg>
        );
      case "iconJavascript":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H35V35H0V0ZM32.1344 26.6547C31.8784 25.0534 30.835 23.7147 27.7539 22.4623C26.6831 21.9614 25.4866 21.6081 25.1333 20.7987C25.002 20.3197 24.9791 20.0583 25.0644 19.7728C25.2864 18.8267 26.3977 18.5478 27.2748 18.8103C27.8447 18.9864 28.3686 19.4195 28.6989 20.1206C30.2083 19.1352 30.2083 19.1352 31.2572 18.48C30.8645 17.8708 30.6709 17.6028 30.403 17.3469C29.4853 16.3155 28.2614 15.7916 26.273 15.8375L25.2416 15.9688C24.2561 16.2083 23.3166 16.7322 22.7467 17.4333C21.0886 19.3134 21.5677 22.5947 23.578 23.9564C25.5664 25.4428 28.4769 25.7677 28.8531 27.1698C29.2009 28.8794 27.5833 29.4263 25.982 29.2261C24.803 28.9636 24.1478 28.3719 23.4237 27.2781L20.7572 28.8105C21.0591 29.5116 21.4123 29.8134 21.9362 30.4281C24.4716 32.9864 30.8175 32.8552 31.9561 28.9636C31.9955 28.8323 32.3039 27.9322 32.0644 26.5595L32.1344 26.6547ZM19.0323 16.0869H15.7566C15.7566 18.912 15.7391 21.7208 15.7391 24.5525C15.7391 26.3473 15.8298 27.9989 15.54 28.5064C15.0555 29.5094 13.8195 29.3836 13.2552 29.2075C12.6798 28.9231 12.3834 28.5294 12.0477 27.9595C11.9503 27.8053 11.8825 27.6752 11.8595 27.6752L9.19953 29.3158C9.64359 30.2334 10.2933 31.0253 11.1311 31.5262C12.3791 32.2722 14.0536 32.5117 15.808 32.1191C16.9477 31.7887 17.9331 31.1106 18.445 30.0628C19.1909 28.7066 19.0312 27.0441 19.0258 25.1803C19.0433 22.1834 19.0258 19.1877 19.0258 16.1678L19.0323 16.0869Z" />
          </svg>
        );
      case "iconNext":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.3551 0.0273542C16.2799 0.0341895 16.0407 0.0581129 15.8254 0.0752011C10.8595 0.522911 6.20814 3.20234 3.26213 7.32059C1.62167 9.6104 0.572456 12.2078 0.17601 14.959C0.035887 15.9194 0.0187988 16.203 0.0187988 17.5051C0.0187988 18.8073 0.035887 19.0909 0.17601 20.0513C1.12611 26.6166 5.79802 32.1326 12.1343 34.1764C13.269 34.542 14.4651 34.7915 15.8254 34.9419C16.3551 35 18.6449 35 19.1746 34.9419C21.5226 34.6822 23.5116 34.1012 25.4733 33.0998C25.7741 32.946 25.8322 32.905 25.7912 32.8708C25.7638 32.8503 24.4822 31.1313 22.9443 29.0533L20.1487 25.2768L16.6456 20.0923C14.718 17.242 13.1323 14.9112 13.1186 14.9112C13.1049 14.9077 13.0913 17.2112 13.0844 20.0239C13.0742 24.9487 13.0707 25.147 13.0092 25.2632C12.9204 25.4306 12.852 25.499 12.7085 25.5742C12.5991 25.6289 12.5034 25.6391 11.9874 25.6391H11.3961L11.2389 25.54C11.1364 25.4751 11.0612 25.3896 11.0099 25.2905L10.9381 25.1367L10.945 18.2844L10.9552 11.4286L11.0612 11.2953C11.1159 11.2235 11.2321 11.1313 11.3141 11.0868C11.4542 11.0185 11.5089 11.0116 12.1001 11.0116C12.7973 11.0116 12.9135 11.039 13.0947 11.2372C13.1459 11.2919 15.0427 14.149 17.312 17.5906C19.5813 21.0321 22.6846 25.7314 24.2088 28.0383L26.9771 32.2317L27.1172 32.1395C28.3578 31.3329 29.6702 30.1846 30.7092 28.9884C32.9204 26.4491 34.3455 23.3527 34.824 20.0513C34.9641 19.0909 34.9812 18.8073 34.9812 17.5051C34.9812 16.203 34.9641 15.9194 34.824 14.959C33.8739 8.39372 29.202 2.87766 22.8657 0.833916C21.7481 0.471647 20.5588 0.222159 19.2259 0.0717835C18.8978 0.0376071 16.6388 1.31484e-05 16.3551 0.0273542ZM23.5116 10.6015C23.6757 10.6835 23.809 10.8408 23.8568 11.0048C23.8841 11.0937 23.891 12.9939 23.8841 17.2762L23.8739 23.4211L22.7905 21.7601L21.7037 20.0991V15.6323C21.7037 12.7444 21.7174 11.121 21.7379 11.0424C21.7926 10.851 21.9122 10.7006 22.0762 10.6118C22.2163 10.54 22.2676 10.5332 22.8042 10.5332C23.31 10.5332 23.3988 10.54 23.5116 10.6015Z" />
            <path d="M26.8061 32.3069C26.6865 32.3821 26.6489 32.4333 26.7549 32.3752C26.83 32.3308 26.9531 32.2385 26.9326 32.2351C26.9223 32.2351 26.8642 32.2693 26.8061 32.3069ZM26.5703 32.4607C26.5088 32.5085 26.5088 32.5119 26.584 32.4743C26.625 32.4538 26.6592 32.4299 26.6592 32.4231C26.6592 32.3957 26.6421 32.4026 26.5703 32.4607ZM26.3994 32.5632C26.3379 32.611 26.3379 32.6145 26.4131 32.5769C26.4541 32.5564 26.4883 32.5324 26.4883 32.5256C26.4883 32.4983 26.4712 32.5051 26.3994 32.5632ZM26.2285 32.6657C26.167 32.7136 26.167 32.717 26.2422 32.6794C26.2832 32.6589 26.3174 32.635 26.3174 32.6281C26.3174 32.6008 26.3003 32.6076 26.2285 32.6657ZM25.9688 32.8024C25.8389 32.8708 25.8458 32.8981 25.9756 32.8332C26.0337 32.8024 26.0782 32.7717 26.0782 32.7648C26.0782 32.7409 26.0748 32.7443 25.9688 32.8024Z" />
          </svg>
        );
      case "iconMySql":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.96522 5.89069C7.63626 5.88492 7.30791 5.92118 6.98814 5.9986V6.05402H7.04209C7.23168 6.44339 7.56709 6.69569 7.80189 7.0311L8.34439 8.17006L8.3998 8.1161C8.73522 7.87985 8.8898 7.50069 8.88834 6.92173C8.75272 6.78027 8.7323 6.60235 8.61564 6.43319C8.46105 6.2086 8.16064 6.08027 7.96522 5.89069ZM34.24 33.7405C34.4952 33.9286 34.6673 34.2203 34.9998 34.3384V34.283C34.8248 34.0613 34.7811 33.7551 34.6206 33.5232C34.3858 33.2899 34.1481 33.0536 33.9148 32.8174C33.2236 31.9015 32.3486 31.0965 31.4167 30.4286C30.6758 29.8963 29.0119 29.1759 28.7027 28.3126L28.6473 28.2571C29.1738 28.1988 29.7906 28.0078 30.2763 27.878C31.0929 27.6592 31.8221 27.7146 32.665 27.4988C33.0456 27.388 33.4248 27.2801 33.8054 27.1721V26.9534C33.3796 26.5159 33.0763 25.9384 32.6111 25.5432C31.3948 24.5078 30.0692 23.4724 28.7027 22.6119C27.9444 22.1321 27.0081 21.823 26.2046 21.4161C25.9348 21.2805 25.4608 21.209 25.2829 20.983C24.86 20.4434 24.6311 19.7624 24.3058 19.1367C23.6248 17.8242 22.954 16.3907 22.3517 15.0096C21.939 14.069 21.6706 13.1415 21.1558 12.2971C18.6913 8.24298 16.0371 5.79735 11.9275 3.39256C11.0525 2.88214 9.99959 2.67944 8.88834 2.41548L7.09605 2.30756C6.73147 2.15444 6.3523 1.70964 6.01105 1.49235C4.64897 0.631935 1.1548 -1.23911 0.148553 1.2211C-0.488739 2.77423 1.09939 4.28944 1.66814 5.07548C2.06626 5.62819 2.57668 6.24652 2.86251 6.86777C3.04918 7.2761 3.08126 7.68444 3.24168 8.1161C3.63689 9.18069 3.97959 10.3357 4.49001 11.3186C4.74959 11.8159 5.03397 12.3394 5.35918 12.7842C5.56043 13.0569 5.90168 13.178 5.95564 13.5994C5.62022 14.0676 5.60272 14.7953 5.41459 15.3903C4.56584 18.0663 4.88522 21.3913 6.12043 23.3717C6.49814 23.9784 7.38918 25.2821 8.61564 24.7819C9.68897 24.3444 9.4498 22.9911 9.75605 21.7967C9.82459 21.5255 9.78376 21.3257 9.91939 21.1449V21.1988L10.8965 23.153C11.6198 24.3182 12.9031 25.5359 13.9911 26.3569C14.554 26.7828 14.9973 27.5192 15.7279 27.7686V27.7132H15.674C15.5311 27.4944 15.3094 27.4026 15.1315 27.2246C14.6799 26.7863 14.2621 26.3144 13.8817 25.813C12.8929 24.4713 12.0194 23.0013 11.2231 21.4715C10.8425 20.7394 10.5115 19.9344 10.1906 19.1907C10.0667 18.9034 10.0681 18.4703 9.81147 18.3215C9.46001 18.8669 8.9423 19.3074 8.67105 19.9505C8.23647 20.9786 8.17959 22.2328 8.01918 23.5336C7.92439 23.5671 7.96668 23.5438 7.9098 23.5876C7.15439 23.4053 6.88897 22.6265 6.60751 21.9586C5.8973 20.2713 5.76459 17.5515 6.39022 15.6076C6.55209 15.1044 7.28418 13.5207 6.98814 13.0555C6.84522 12.5917 6.38001 12.3249 6.11897 11.9705C5.77765 11.4947 5.48638 10.985 5.2498 10.4494C4.66939 9.13402 4.39668 7.65527 3.78418 6.32381C3.49251 5.68798 2.99668 5.04485 2.5898 4.47902C2.14064 3.85194 1.63605 3.3911 1.28751 2.63277C1.16355 2.36298 0.994386 1.93277 1.17814 1.65569C1.23647 1.46902 1.31959 1.39027 1.5048 1.33048C1.8198 1.08694 2.69626 1.41069 3.02439 1.54631C3.89501 1.90798 4.62126 2.25214 5.35772 2.74214C5.71209 2.97548 6.07084 3.43048 6.49814 3.55589H6.98668C7.7523 3.73089 8.60834 3.60985 9.32147 3.82714C10.5829 4.21069 11.7131 4.80714 12.7413 5.4561C15.8708 7.43214 18.4288 10.2438 20.1788 13.5994C20.4602 14.139 20.5827 14.6553 20.8306 15.2284C21.3308 16.3834 21.9608 17.5719 22.4581 18.7021C22.954 19.8294 23.4396 20.9669 24.1411 21.9046C24.51 22.3976 25.9363 22.663 26.5852 22.9371C27.0388 23.1282 27.7825 23.3294 28.2127 23.5876C29.0352 24.0834 29.8315 24.674 30.6015 25.2165C30.9865 25.4892 32.1721 26.0842 32.2304 26.5728C30.32 26.5232 28.8617 26.6996 27.6163 27.2261C27.2619 27.3749 26.6975 27.3792 26.6392 27.8226C26.8331 28.0267 26.8638 28.333 27.0183 28.5824C27.3158 29.0636 27.819 29.7096 28.2667 30.048C28.7581 30.4184 29.2627 30.8136 29.7877 31.1344C30.7211 31.7032 31.7652 32.0299 32.6636 32.6001C33.1958 32.9369 33.7223 33.3599 34.2386 33.7405H34.24Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={size} height={size} />
              </clipPath>
            </defs>
          </svg>
        );
      case "iconNode":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.4999 32.0615C17.0989 32.0615 16.7241 31.9536 16.3741 31.7669L12.8172 29.6552C12.2849 29.3592 12.5518 29.2513 12.7122 29.1973C13.4356 28.9567 13.5697 28.9042 14.3179 28.4784C14.3995 28.4244 14.506 28.4492 14.5877 28.5031L17.3147 30.1365C17.4227 30.189 17.5568 30.189 17.637 30.1365L28.3106 23.9575C28.4185 23.905 28.471 23.7971 28.471 23.6629V11.3284C28.471 11.1956 28.4185 11.0877 28.3106 11.0352L17.637 4.88252C17.5306 4.82856 17.3964 4.82856 17.3147 4.88252L6.63828 11.0338C6.53182 11.0863 6.47786 11.2219 6.47786 11.3269V23.66C6.47786 23.7665 6.53182 23.9021 6.63828 23.9546L9.55495 25.6419C11.1329 26.4411 12.1245 25.5034 12.1245 24.57V12.3988C12.1245 12.2384 12.2572 12.0765 12.4454 12.0765H13.8104C13.9679 12.0765 14.1312 12.2106 14.1312 12.3988V24.5715C14.1312 26.6846 12.982 27.9169 10.9754 27.9169C10.3599 27.9169 9.8787 27.9169 8.5137 27.2461L5.70641 25.6434C5.36437 25.4445 5.0805 25.1594 4.88319 24.8165C4.68588 24.4735 4.58204 24.0848 4.58203 23.6892V11.3546C4.58203 10.5525 5.00932 9.80294 5.70641 9.40189L16.3756 3.22294C16.7219 3.03771 17.1086 2.9408 17.5014 2.9408C17.8942 2.9408 18.2809 3.03771 18.6272 3.22294L29.2979 9.40189C29.9964 9.80148 30.4222 10.5525 30.4222 11.3546V23.6892C30.4222 24.4898 29.9949 25.2394 29.2979 25.6434L18.6272 31.8209C18.2758 31.9813 17.8747 32.0615 17.4999 32.0615ZM20.7899 23.5798C16.1087 23.5798 15.1462 21.439 15.1462 19.6219C15.1462 19.4615 15.2804 19.2996 15.467 19.2996H16.8583C17.0187 19.2996 17.1514 19.4061 17.1514 19.5679C17.3658 20.984 17.9797 21.6811 20.8177 21.6811C23.0635 21.6811 24.0289 21.1706 24.0289 19.9675C24.0289 19.2719 23.7591 18.7644 20.2562 18.4173C17.341 18.1256 15.5224 17.4796 15.5224 15.1536C15.5224 12.9879 17.341 11.7031 20.3918 11.7031C23.8145 11.7031 25.5004 12.8829 25.7133 15.4481C25.7107 15.5347 25.6823 15.6185 25.6316 15.6888C25.5777 15.7413 25.4989 15.7952 25.4187 15.7952H24.0289C23.9602 15.7938 23.894 15.7695 23.8406 15.7262C23.7873 15.6828 23.7499 15.623 23.7343 15.5561C23.412 14.0802 22.5837 13.6019 20.3918 13.6019C17.9287 13.6019 17.6341 14.4579 17.6341 15.0996C17.6341 15.874 17.9797 16.1146 21.3004 16.5434C24.5904 16.9706 26.142 17.5861 26.142 19.8888C26.1129 22.244 24.1893 23.5798 20.7899 23.5798Z" />
          </svg>
        );
      case "iconTypescript":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0V35H35V0H0ZM20.1281 15.1915H15.1505V30.6102H12.4093V15.1915H7.44194V12.6418H20.1281V15.1915H20.1281ZM30.3281 29.0383C28.6572 31.2156 23.8642 31.548 21.0774 29.7365V26.3283C22.5943 27.985 24.1639 28.2218 25.3869 28.3341C29.2075 28.652 29.3182 25.4695 27.7717 24.1573C25.4946 22.3195 20.9597 21.2969 21.1013 17.3256C21.0684 14.4806 23.2771 12.5708 26.564 12.3933C27.8096 12.3261 29.585 12.4036 30.7016 13.1247V16.3285C28.081 13.924 22.6263 14.5689 23.949 18.1379C25.1461 20.3415 29.2628 20.5582 30.9952 24.0478C31.7304 26.0109 31.3212 27.7443 30.3281 29.0383Z" />
          </svg>
        );
      case "iconReact":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 14.3784C15.7795 14.3784 14.3784 15.7795 14.3784 17.5C14.3784 19.2204 15.7795 20.6215 17.5 20.6215C19.2205 20.6215 20.6216 19.2204 20.6216 17.5C20.6216 15.7795 19.2205 14.3784 17.5 14.3784ZM8.76094 23.7037L8.07188 23.5331C2.94437 22.2337 0 20.0353 0 17.4945C0 14.9537 2.94547 12.7553 8.07188 11.4559L8.76094 11.2853L8.95453 11.9689C9.47469 13.7594 10.1397 15.5046 10.943 17.1872L11.0906 17.4945L10.943 17.8073C10.138 19.4892 9.47295 21.2345 8.95453 23.0256L8.76094 23.7037ZM7.75359 13.0506C3.85656 14.1444 1.46453 15.8244 1.46453 17.4945C1.46453 19.1647 3.85766 20.8381 7.75359 21.9384C8.23118 20.421 8.80773 18.9365 9.47953 17.4945C8.80679 16.0529 8.23022 14.5684 7.75359 13.0506ZM26.2391 23.7037L26.0455 23.0201C25.5262 21.2311 24.8612 19.4877 24.057 17.8073L23.9094 17.4945L24.057 17.1817C24.862 15.4998 25.527 13.7545 26.0455 11.9634L26.2391 11.2853L26.9281 11.4559C32.0556 12.7553 35 14.9537 35 17.4945C35 20.0353 32.0545 22.2337 26.9281 23.5331L26.2391 23.7037ZM25.5205 17.4945C26.1945 18.9355 26.7711 20.4202 27.2464 21.9384C31.1489 20.8392 33.5355 19.1647 33.5355 17.4945C33.5355 15.8244 31.1423 14.1509 27.2464 13.0506C26.7677 14.5676 26.1912 16.052 25.5205 17.4945ZM7.74156 13.0451L7.54797 12.3615C6.10641 7.27998 6.545 3.63451 8.75 2.36357C10.9145 1.1156 14.3839 2.59107 18.0239 6.32841L18.5194 6.83591L18.0239 7.34341C16.7313 8.68831 15.5501 10.1361 14.4922 11.6725L14.2931 11.9514L13.9508 11.9798C12.0897 12.1267 10.2437 12.4241 8.43062 12.869L7.74156 13.0451ZM10.5098 3.37857C10.1172 3.37857 9.76938 3.45841 9.47844 3.62904C8.03141 4.46685 7.77547 7.37185 8.77188 11.2908C10.3266 10.943 11.9024 10.6975 13.4892 10.5558C14.4028 9.25462 15.4017 8.01559 16.4795 6.84685C14.2067 4.63091 12.0531 3.37748 10.5098 3.37748V3.37857ZM24.4956 33.0684C24.4902 33.0684 24.4902 33.0684 24.4956 33.0684C22.4164 33.0684 19.7444 31.5076 16.9761 28.6595L16.4806 28.152L16.9761 27.6445C18.2687 26.2996 19.4499 24.8518 20.5078 23.3154L20.7014 23.0365L21.0437 23.0026C22.9072 22.8607 24.7555 22.5632 26.5694 22.1134L27.2584 21.9428L27.452 22.6264C28.8936 27.7079 28.455 31.3479 26.25 32.6178C25.7169 32.9242 25.1104 33.0796 24.4956 33.0673V33.0684ZM18.5194 28.1411C20.7922 30.357 22.9458 31.6104 24.4891 31.6104H24.4945C24.8817 31.6104 25.2295 31.5251 25.5205 31.36C26.9675 30.5222 27.23 27.6172 26.227 23.6983C24.6726 24.0464 23.0966 24.2901 21.5097 24.4278C20.5962 25.7307 19.5972 26.9715 18.5194 28.1422V28.1411ZM27.2584 13.0451L26.5694 12.869C24.7542 12.4256 22.9064 12.1282 21.0437 11.9798L20.7014 11.9514L20.5078 11.6725C19.4499 10.1361 18.2687 8.68831 16.9761 7.34341L16.4806 6.83591L16.9761 6.32841C20.6161 2.59107 24.0855 1.1156 26.25 2.36357C28.455 3.63341 28.8936 7.27998 27.452 12.3615L27.2584 13.0451ZM21.5108 10.5558C23.0976 10.6971 24.6735 10.9426 26.2281 11.2908C27.2311 7.37185 26.9686 4.46576 25.5216 3.62904C24.08 2.79779 21.3686 4.0731 18.5205 6.84794C19.5953 8.01919 20.5942 9.25803 21.5108 10.5569V10.5558ZM10.5098 33.0684C9.89406 33.0793 9.28484 32.9262 8.75 32.6189C6.545 31.349 6.10641 27.7079 7.54797 22.6275L7.74156 21.9439L8.43062 22.1145C10.1172 22.5422 11.9744 22.8375 13.9508 23.0037L14.2931 23.0376L14.4867 23.3165C15.5447 24.8529 16.7258 26.3007 18.0184 27.6456L18.5139 28.1531L18.0184 28.6606C15.2556 31.5087 12.5836 33.0695 10.5098 33.0695V33.0684ZM8.77297 23.6983C7.77 27.6172 8.0325 30.5233 9.47953 31.36C10.9211 32.1803 13.627 30.9159 16.4806 28.1411C15.4028 26.9704 14.4038 25.7296 13.4903 24.4267C11.9033 24.2894 10.3273 24.0457 8.77297 23.6972V23.6983ZM17.5 24.6148C16.298 24.6148 15.0675 24.5634 13.8316 24.4606L13.4892 24.4322L13.2902 24.1478C12.592 23.1447 11.9363 22.1127 11.3247 21.0547C10.7118 19.9965 10.1436 18.9131 9.62172 17.8073L9.47406 17.4945L9.62172 17.1817C10.6674 14.9705 11.8944 12.8498 13.2902 10.8412L13.4892 10.5569L13.8316 10.5284C16.2729 10.3228 18.7271 10.3228 21.1684 10.5284L21.5108 10.5569L21.7098 10.8412C23.1074 12.8487 24.3345 14.9696 25.3783 17.1817L25.5259 17.4945L25.3783 17.8073C24.3366 20.0206 23.1094 22.1416 21.7098 24.1478L21.5108 24.4322L21.1684 24.4606C19.9483 24.5627 18.7244 24.6142 17.5 24.6148ZM14.2986 23.0311C16.4522 23.1962 18.5478 23.1962 20.7069 23.0311C21.911 21.2678 22.9811 19.4168 23.9083 17.4934C22.9851 15.5669 21.9128 13.7154 20.7014 11.9558C18.5703 11.7906 16.4297 11.7906 14.2986 11.9558C13.0863 13.7148 12.014 15.5664 11.0917 17.4934C12.0191 19.4177 13.0912 21.2689 14.2986 23.0311Z" />
          </svg>
        );
      case "iconPostgres":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={!!fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24.9801 0C23.619 0.0103566 22.2657 0.207617 20.9583 0.58625L20.8676 0.615781C20.045 0.473269 19.2128 0.393197 18.3782 0.37625C16.6577 0.346719 15.1812 0.762344 13.9912 1.45797C12.8176 1.05437 10.3851 0.346719 7.82131 0.49C6.03959 0.58625 4.09053 1.12766 2.6424 2.65453C1.2074 4.17594 0.445059 6.53406 0.603653 9.7475C0.648496 10.6302 0.900059 12.0706 1.32115 13.9442C1.73678 15.8134 2.32412 18.0009 3.05912 20.0003C3.79412 21.9942 4.59584 23.788 5.85037 25.0064C6.476 25.6156 7.34225 26.1352 8.36162 26.0903C9.07475 26.0608 9.71787 25.748 10.2768 25.2864C10.5491 25.6452 10.8412 25.7983 11.1026 25.9416C11.4394 26.1242 11.7577 26.2489 12.0946 26.3298C12.6983 26.483 13.7297 26.6831 14.9372 26.4775C15.3769 26.3984 15.8055 26.2665 16.2137 26.0848L16.2651 27.5144C16.3274 29.0238 16.369 30.4194 16.8174 31.6444C16.8918 31.8445 17.0919 32.8694 17.8772 33.7805C18.6691 34.6916 20.2058 35.2559 21.9668 34.8797C23.2038 34.6172 24.781 34.1392 25.8299 32.6473C26.8668 31.1773 27.3338 29.0642 27.4257 25.6342C27.4476 25.4461 27.4771 25.293 27.5044 25.1442L27.7494 25.1672H27.779C29.1002 25.2241 30.5363 25.0359 31.7383 24.477C32.7971 23.987 33.601 23.4916 34.1872 22.6089C34.3305 22.3912 34.4946 22.1244 34.5362 21.6683C34.581 21.2188 34.3185 20.5056 33.8854 20.1764C33.0202 19.5158 32.4733 19.7663 31.886 19.892C31.3108 20.016 30.7253 20.0863 30.1371 20.102C31.8226 17.2659 33.0301 14.2472 33.7202 11.5795C34.1304 10.0012 34.359 8.54875 34.3754 7.27891C34.3983 6.00906 34.2912 4.88688 33.5321 3.91344C31.151 0.877188 27.8063 0.0328125 25.2207 0.00546875H24.9812L24.9801 0ZM24.9112 0.935156C27.3557 0.912188 30.4816 1.59578 32.726 4.46578C33.2335 5.11 33.3822 6.04953 33.3647 7.21219C33.3472 8.37484 33.1318 9.75844 32.738 11.2798C31.9812 14.2319 30.5385 17.6597 28.5172 20.743C28.5868 20.7954 28.6634 20.8377 28.7447 20.8687C29.1658 21.0448 30.1283 21.1925 32.0533 20.7998C32.5379 20.6959 32.8922 20.6292 33.2619 20.9081C33.3517 20.9838 33.4225 21.0793 33.4688 21.1872C33.5152 21.295 33.5357 21.4122 33.5288 21.5294C33.5089 21.707 33.4421 21.8761 33.3352 22.0194C32.9644 22.5761 32.2316 23.1077 31.291 23.5462C30.4597 23.9323 29.2621 24.1325 28.2099 24.1445C27.6751 24.15 27.1851 24.1095 26.7672 23.9783L26.7454 23.9739C26.5846 25.5172 26.216 28.5709 25.9754 29.96C25.7829 31.0811 25.446 31.9769 24.8029 32.643C24.1587 33.3156 23.253 33.7137 22.028 33.9762C20.5132 34.3011 19.4129 33.9533 18.7019 33.355C17.991 32.7567 17.6651 31.9594 17.4715 31.4748C17.3358 31.1391 17.2669 30.7059 17.1991 30.1241C17.1247 29.4293 17.0751 28.7322 17.0504 28.0339C17.0055 26.8089 16.988 25.5839 17.0055 24.3534C16.3736 24.9329 15.5885 25.3186 14.7437 25.4647C13.7363 25.6353 12.8416 25.4647 12.3068 25.3334C12.0429 25.2661 11.7883 25.1666 11.5488 25.037C11.2983 24.9058 11.0643 24.7581 10.9057 24.4606C10.8143 24.2903 10.786 24.0931 10.8258 23.9039C10.8731 23.7117 10.9837 23.5411 11.1397 23.4194C11.4296 23.1842 11.8124 23.0552 12.3866 22.9348C13.4355 22.7172 13.8052 22.5706 14.0272 22.3923C14.2154 22.2447 14.433 21.9373 14.8071 21.4867C14.8071 21.4703 14.8071 21.4473 14.8016 21.4298C14.1238 21.4092 13.4604 21.2298 12.8646 20.9059C12.6491 21.1334 11.5258 22.3191 10.1652 23.9597C9.59537 24.6422 8.96318 25.0359 8.29162 25.0655C7.62553 25.0928 7.01959 24.7581 6.50771 24.2616C5.48287 23.2641 4.66147 21.5491 3.94943 19.612C3.2374 17.675 2.66209 15.517 2.24646 13.6828C1.83631 11.842 1.59131 10.3611 1.55631 9.64906C1.40318 6.61281 2.11522 4.56859 3.33365 3.27469C4.55209 1.98078 6.22225 1.49734 7.85193 1.40109C10.7744 1.23594 13.5537 2.25531 14.1126 2.47187C15.1943 1.73687 16.5899 1.28188 18.3333 1.30922C19.1596 1.32137 19.9816 1.42853 20.7833 1.62859L20.8129 1.61109C21.1656 1.48893 21.5249 1.38669 21.8891 1.30484C22.879 1.07254 23.8912 0.948216 24.9079 0.934062L24.9112 0.935156ZM25.1332 1.90859H24.9177C24.0865 1.91844 23.2476 2.01688 22.4338 2.19297C24.2505 2.99688 25.6232 4.23172 26.5912 5.47422C27.2638 6.32844 27.8162 7.26797 28.2372 8.27094C28.4035 8.65922 28.5118 8.98297 28.5687 9.23344C28.6026 9.35922 28.6201 9.46641 28.631 9.57469C28.631 9.63156 28.6365 9.68953 28.608 9.78578C28.608 9.79125 28.6026 9.80328 28.6026 9.80875C28.6496 11.0852 28.3302 11.9492 28.2887 13.1687C28.2613 14.0525 28.4888 15.0894 28.5457 16.2225C28.5971 17.2867 28.4669 18.4548 27.7768 19.6055C27.8337 19.6744 27.8851 19.7422 27.9419 19.8166C29.7707 16.9334 31.0919 13.7495 31.793 11.0316C32.1693 9.56703 32.3672 8.24031 32.3847 7.19359C32.4022 6.14469 32.2087 5.38125 31.9571 5.06297C29.9971 2.56156 27.3491 1.92281 25.1321 1.9075L25.1332 1.90859ZM18.143 2.28375C16.4237 2.28922 15.1866 2.80875 14.2482 3.58859C13.278 4.39797 12.6294 5.49719 12.2083 6.63031C11.7008 7.96906 11.5247 9.26734 11.4558 10.1511L11.4788 10.1391C12.0861 9.79903 12.7381 9.54608 13.4158 9.38766C14.1454 9.21594 14.9372 9.16453 15.6482 9.44453C16.3668 9.71688 16.953 10.372 17.1696 11.3575C18.1966 16.1087 16.8513 17.8752 16.3558 19.2073C16.1677 19.6919 16.0026 20.1819 15.8713 20.6828C15.9337 20.6708 15.9971 20.6533 16.0594 20.6478C16.4127 20.6205 16.6851 20.7342 16.8458 20.802C17.3479 21.012 17.6891 21.4452 17.8772 21.9406C17.9234 22.0759 17.9575 22.215 17.979 22.3563C17.9978 22.4153 18.0078 22.4769 18.0085 22.5389C17.9511 24.3556 17.9565 26.1738 18.0249 27.9902C18.0599 28.7766 18.1113 29.4656 18.1737 30.0125C18.236 30.5539 18.3213 30.9695 18.3793 31.1117C18.5663 31.5787 18.8397 32.188 19.3363 32.6036C19.8263 33.0203 20.5318 33.2938 21.8257 33.0203C22.9468 32.7753 23.6369 32.4439 24.0974 31.9659C24.5601 31.4814 24.8324 30.8153 25.0085 29.7959C25.2765 28.2636 25.8058 23.8197 25.8693 22.9884C25.8419 22.3552 25.9316 21.8717 26.1372 21.5009C26.3418 21.1247 26.6612 20.8917 26.9412 20.7659C27.0768 20.7036 27.208 20.6642 27.3163 20.6292C27.2017 20.4694 27.0839 20.3118 26.963 20.1567C26.5638 19.6723 26.2357 19.1335 25.9885 18.5566C25.8748 18.3146 25.7493 18.0784 25.6122 17.8489C25.4197 17.5022 25.1747 17.0625 24.9177 16.567C24.4047 15.587 23.8469 14.3916 23.556 13.2289C23.2662 12.0663 23.2268 10.8653 23.9672 10.022C24.6224 9.26953 25.7785 8.95781 27.5033 9.13391C27.4519 8.97969 27.4246 8.84844 27.3382 8.64937C26.9459 7.72794 26.4344 6.86196 25.8168 6.07359C24.3522 4.2 21.9766 2.34172 18.3147 2.27938L18.143 2.28375ZM8.46006 2.35812C8.2758 2.35793 8.09159 2.36377 7.90771 2.37562C6.43225 2.46203 5.04209 2.8875 4.04459 3.94188C3.04818 5.00172 2.39412 6.72766 2.53522 9.59328C2.56475 10.1402 2.79772 11.655 3.20131 13.4608C3.60709 15.2677 4.18131 17.3928 4.87147 19.2719C5.55943 21.1455 6.39287 22.7806 7.19021 23.555C7.58834 23.9367 7.93506 24.0964 8.24896 24.0855C8.56287 24.068 8.94459 23.8853 9.41162 23.3275C10.2592 22.3049 11.139 21.3094 12.0497 20.3427C11.4038 19.7804 10.9098 19.0646 10.6131 18.2612C10.3165 17.4579 10.2268 16.5928 10.3522 15.7456C10.4999 14.6694 10.5229 13.6598 10.4999 12.8625C10.4835 12.0881 10.431 11.5762 10.431 11.2514V11.2164L10.4255 11.2066C10.4255 9.52547 10.723 7.86297 11.2918 6.28469C11.7019 5.19531 12.3068 4.09719 13.2168 3.20141C12.3232 2.905 10.7329 2.46203 9.0135 2.37562C8.82962 2.3638 8.64541 2.35796 8.46115 2.35812H8.46006ZM26.5397 10.0592C25.5499 10.0767 24.9965 10.3337 24.7012 10.663C24.2899 11.1366 24.2505 11.9678 24.5076 12.9938C24.7624 14.0186 25.294 15.1637 25.7894 16.1164C26.0344 16.5944 26.274 17.022 26.4665 17.3688C26.6666 17.722 26.8088 17.967 26.8941 18.1836C26.974 18.3772 27.0658 18.5478 27.1566 18.7075C27.5383 17.8981 27.6072 17.1063 27.5668 16.275C27.5154 15.2502 27.2769 14.2012 27.3163 13.1425C27.3568 11.9 27.6018 11.0906 27.6193 10.1336C27.2621 10.0864 26.9022 10.0615 26.5419 10.0592H26.5397ZM14.5326 10.232C14.2307 10.232 13.9288 10.2714 13.6324 10.3403C13.045 10.4816 12.4794 10.702 11.9513 10.9955C11.7736 11.0916 11.6042 11.2025 11.4449 11.3269L11.4099 11.3542C11.4219 11.5719 11.4613 12.0838 11.4788 12.8472C11.4963 13.6784 11.4788 14.7372 11.3202 15.8834C10.9669 18.3783 12.7782 20.4411 14.9033 20.4466C15.0291 19.9336 15.2326 19.4141 15.4382 18.8683C16.0299 17.2725 17.1926 16.1109 16.2126 11.5653C16.054 10.8248 15.7346 10.523 15.2949 10.3523C15.0502 10.2662 14.7918 10.2258 14.5326 10.2331V10.232ZM26.0793 10.5273H26.1537C26.2444 10.5328 26.3363 10.5394 26.4151 10.5613C26.4862 10.5752 26.554 10.6022 26.6152 10.6411C26.6436 10.6581 26.668 10.6812 26.6867 10.7085C26.7054 10.7359 26.718 10.767 26.7235 10.7997V10.8117C26.7232 10.8817 26.7055 10.9504 26.6721 11.0119C26.6291 11.0904 26.5757 11.1629 26.5135 11.2273C26.3664 11.3918 26.167 11.5004 25.9491 11.5347C25.7383 11.5617 25.5249 11.5091 25.3508 11.387C25.2819 11.337 25.2188 11.2794 25.1627 11.2153C25.1135 11.1635 25.0814 11.0978 25.0708 11.0272C25.0644 10.9598 25.0849 10.8926 25.1277 10.8402C25.1784 10.7884 25.2362 10.7442 25.2994 10.7089C25.4405 10.6291 25.6287 10.5722 25.8463 10.5427C25.9251 10.5328 26.0049 10.5263 26.0793 10.5208V10.5273ZM14.6737 10.7723C14.748 10.7723 14.8344 10.7778 14.9143 10.7888C15.1418 10.8238 15.3354 10.8806 15.4885 10.9714C15.5636 11.008 15.6297 11.0606 15.6821 11.1256C15.7389 11.1942 15.7674 11.2818 15.7619 11.3706C15.7464 11.4548 15.7086 11.5334 15.6526 11.5981C15.5926 11.6712 15.5217 11.7346 15.4426 11.7863C15.253 11.9224 15.0188 11.9815 14.7874 11.9514C14.5529 11.9137 14.3382 11.7977 14.1782 11.6222C14.111 11.55 14.0533 11.4695 14.0065 11.3827C13.9554 11.3052 13.9333 11.2123 13.9441 11.1202C13.9671 10.967 14.0983 10.8806 14.2241 10.8358C14.3674 10.7887 14.5205 10.7734 14.6737 10.7789V10.7723ZM27.8851 21.4812H27.8796C27.6696 21.5611 27.4935 21.5906 27.3447 21.6595C27.1942 21.7163 27.0705 21.8276 26.998 21.9712C26.9007 22.1375 26.8274 22.4339 26.8493 22.9392C26.9151 22.9865 26.9888 23.0217 27.0669 23.0431C27.3119 23.1175 27.733 23.1689 28.2001 23.1623C29.1287 23.1503 30.2738 22.9348 30.883 22.6494C31.3809 22.4186 31.8432 22.1177 32.2557 21.7558C30.2224 22.1714 29.0783 22.0631 28.3707 21.7733C28.1968 21.6981 28.0339 21.5998 27.8862 21.4812H27.8851ZM16.1732 21.618H16.1437C16.0649 21.6234 15.9555 21.653 15.7335 21.8925C15.226 22.4613 15.0499 22.82 14.6343 23.1514C14.2132 23.4872 13.6718 23.6644 12.5835 23.8864C12.3514 23.9279 12.1254 23.9985 11.9108 24.0964C11.9502 24.1314 11.9502 24.1434 12.0126 24.1708C12.1733 24.2627 12.3768 24.337 12.543 24.3819C13.0101 24.4956 13.7724 24.6323 14.5763 24.4956C15.3737 24.3589 16.2049 23.9761 16.918 22.9808C17.0438 22.8102 17.0537 22.5531 16.9519 22.2797C16.8502 22.0128 16.6271 21.7733 16.474 21.7109C16.3781 21.6663 16.2765 21.6354 16.1721 21.6191L16.1732 21.618Z" />
          </svg>
        );
      case "iconSqlite":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path d="M17.4619 15.9328L16.3594 19.0602C15.7715 21.0016 15.8215 21.614 16.1196 22.0657C16.1932 22.1767 16.3945 22.5401 16.6758 23.5108C17.0842 24.9159 17.4438 27.0373 17.4526 27.1388C17.3935 28.4355 17.4255 29.8095 17.5427 31.125H2.99158C1.34628 31.125 0 29.9207 0 28.449V4.23025C0 2.75847 1.3462 1.55398 2.99158 1.55398H25.383C21.9536 4.80823 18.5557 10.9832 17.4619 15.9328V15.9328ZM33.2682 0.76142C37.3715 4.03577 33.2969 11.5213 29.5569 16.7905C26.8374 17.5724 23.6677 19.299 23.6677 19.299C23.6677 19.299 23.9314 19.1738 24.9099 18.8067C25.5732 18.5572 27.5539 18.136 28.76 17.89C26.7464 20.6056 25.0234 22.5064 25.0234 22.5064C25.0234 22.5064 21.5104 23.7834 20.424 26.7542C21.0536 23.5853 22.0985 20.2779 23.573 16.7533C24.8899 13.6059 29.2889 5.10641 32.5391 2.48066C28.9731 5.02315 25.0768 10.3469 22.2684 16.9823C20.6062 21.3778 19.7066 25.595 19.5601 29.0921C19.4633 31.3799 19.6844 33.3637 20.2287 34.8775L19.9771 35.0002C19.4431 33.7607 18.9531 31.5824 19.0703 27.1187C19.0528 26.9195 19.0423 26.7901 19.0423 26.7901C19.0423 26.7901 18.7181 24.8372 18.2519 23.2331C18.0454 22.521 17.8103 21.8771 17.5636 21.5039C17.4364 21.3113 17.5773 20.5204 17.9322 19.3487C18.5332 20.2847 19.1815 21.298 19.4306 22.1271C19.4306 22.1271 18.9504 19.917 18.1624 18.6273C18.3351 18.1059 18.5414 17.5296 18.7749 16.9135C19.3561 17.8227 19.9488 18.6878 20.1852 19.5542C19.9266 18.4473 19.5765 17.3449 19.0312 16.252C20.0224 11.638 23.2128 5.59641 26.6499 2.33471C28.4845 0.583549 31.0128 -0.983726 33.2682 0.76142V0.76142Z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width={size} height={size} />
              </clipPath>
            </defs>
          </svg>
        );
      default:
        break;
    }
  };

  return getIcon();
}
