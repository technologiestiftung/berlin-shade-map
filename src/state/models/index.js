import MapModel from "./MapModel";
import DataModel from "./DataModel";
import FilterModel from "./FilterModel";
import TagsModel from "./TagsModel";
import TooltipModel from "./TooltipModel";
import LegendModel from "./LegendModel";

export default {
  ...MapModel,
  ...DataModel,
  ...LegendModel,
  ...TagsModel,
  ...FilterModel,
  ...TooltipModel,
};
