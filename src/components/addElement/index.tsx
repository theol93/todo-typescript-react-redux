import React from "react";
import "./index.css";
import { WiredButton, WiredInput } from "react-wired-elements";

export default function AddElement(props: any) {
  let setListItems = props.setListItems;
  let inputText: string = "";

  function handleClick(): void {
    setListItems(inputText.toUpperCase());
  }

  function handleChange(e: any): string {
    return (inputText = e.target.value);
  }

  return (
    <section className={"inputItem"}>
      <section>
        <WiredInput
          placeholder="..."
          onChange={(e) => handleChange(e)}
        />
        <WiredButton elevation={2} onClick={handleClick}>
          Добавить
        </WiredButton>
      </section>
    </section>
  );
}
