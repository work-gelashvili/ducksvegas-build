import styles from "./Ui.module.css";
// import iconArrow from "../../icons/select-arrow.svg";
import { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";

const InputMobile = ({
  data,
  inputType,
  htmlPlaceholder,
  className,
  inputOnChange,
  changeIndex,
  htmlLabel,
  setIdexSelected,
}) => {
  const [showOption, setShowOption] = useState(false);
  const [selected, setSelected] = useState("");
  const [indexValue, setIndexValue] = useState("Index");

  const setActiveOption = (e) => {
    setSelected(e.target.innerText);
    setShowOption(false);
    changeIndex(e.target.innerText);
    setIdexSelected(true);
  };

  const phoneCode = htmlPlaceholder.split("-");

  const searchIndex = (e) => {
    setIndexValue(e.target.value);
  };

  // const ragaca = (e) => {
  //   return <div>{e.target.value}</div>
  // }

  return (
    <>
      <p className={styles["form-label"]}>{htmlLabel}</p>
      <div className={styles["mobile"]}>
        <MentionsInput value={indexValue} onChange={searchIndex}>
          <Mention
            trigger=""
            data={data}
            displayTransform={(id) => `<!--${id}-->`}
          />
        </MentionsInput>

        <input
          type={inputType}
          placeholder={phoneCode[1] ? phoneCode[1] : htmlPlaceholder}
          className={className ? className : styles["mobile-input"]}
          onChange={inputOnChange && inputOnChange}
        />
      </div>
    </>
  );
};

export default InputMobile;
