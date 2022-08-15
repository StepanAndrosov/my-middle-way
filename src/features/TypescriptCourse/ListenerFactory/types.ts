
import { Button, Select, Input } from "antd";


type BtnType = typeof Button

  export interface ListenerFactory {
    makeButtonClick: () => (this: HTMLButtonElement, evt: MouseEvent) => void;
    makeInputInput: () => (this: HTMLInputElement, evt: InputEvent) => void;
    makeSelectInput: () => (this: HTMLSelectElement, evt: InputEvent) => void;
    makeTextAreaInput: () => (this: HTMLTextAreaElement, evt: InputEvent) => void;
  }

  let a: ListenerFactory['makeInputInput']