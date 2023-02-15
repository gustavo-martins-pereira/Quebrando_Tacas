import { Menu } from "./models/hamburguerMenu.js";

const $menu = document.querySelector("[data-element-id='menu']");
const $menuHamburguerButton = document.querySelector("[data-element-id='menuHamburguerIcon']");

new Menu($menu, $menuHamburguerButton);