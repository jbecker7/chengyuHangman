import styles from "./Keyboard.module.css";

const KEYS = [
  "不",
  "一",
  "无",
  "大",
  "而",
  "心",
  "自",
  "有",
  "人",
  "可",
  "之",
  "所",
  "相",
  "成",
  "为",
  "目",
  "得",
  "理",
  "以",
  "然",
  "意",
  "天",
  "面",
  "见",
  "力",
  "如",
  "知",
  "同",
  "出",
  "万",
  "地",
  "日",
  "前",
  "全",
  "风",
  "多",
  "千",
  "口",
  "惊",
  "异",
  "扬",
  "想",
  "动",
  "精",
  "举",
  "其",
  "作",
  "事",
  "色",
  "手",
  "半",
  "是",
  "下",
  "头",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
