import MapModel from "./MapModel";
import DataModel from "./DataModel";
import TooltipModel from "./TooltipModel";
import LegendModel from "./LegendModel";

export default {
  ...MapModel,
  ...DataModel,
  ...LegendModel,
  ...TooltipModel,
};
