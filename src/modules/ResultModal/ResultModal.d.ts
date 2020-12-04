import { ModalParameters, ModalStyle } from "@eightfeet/modal";
import * as CSS from "csstype";
import { PrizesItem } from "~/types/prizes";

export interface ResultModalStyle extends ModalStyle {
  /*
   * 奖品别名
   */
  prizeAlias?: CSS.Properties;
  prizeName?: CSS.Properties;
  awardMsg?: CSS.Properties;
  prizeImg?: CSS.Properties;
  memo?: CSS.Properties;
  contentTop?: CSS.Properties;
  contentBottom?: CSS.Properties;
  submit?: CSS.Properties;
  header?: CSS.Properties;
  article?: CSS.Properties;
  footer?: CSS.Properties;
  modalTitle?: CSS.Properties;
}

export interface ResultModalParameters extends ModalParameters {
  style?: ResultModalStyle;
  /** 标题 */
  modalTitle: string;
  outerFrameId: string;
  onCancel: () => void;
  submitText: string;
  onEnsure: (prize: PrizesItem) => void;
  submitAddressText: string;
}
