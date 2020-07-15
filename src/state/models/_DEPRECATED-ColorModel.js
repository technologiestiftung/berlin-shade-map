import { action } from "easy-peasy";
// import { colorMode } from "~/utils";
const colorMode = () => ["#121337", "#F2F2F4"];
/**
 * @deprecated not used anywhere
 *
 */
const ColorModel = {
  default: colorMode(["#121337", "#F2F2F4"]),
  color: colorMode(["#121337", "#F2F2F4"]),
  setColor: action((state, payload) => {
    state.color = payload;
  }),
};

export default ColorModel;
