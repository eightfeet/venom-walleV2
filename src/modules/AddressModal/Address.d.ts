import { ModalStyle } from "@eightfeet/modal";
import * as CSS from "csstype";
import { MessageStyle } from "../Msg";

export interface AddressModalThemeType extends ModalStyle {
  content: CSS.Properties;
  contentTop: CSS.Properties;
  contentBottom: CSS.Properties;
  submit: CSS.Properties;
  header: CSS.Properties;
  article: CSS.Properties;
  footer: CSS.Properties;
  close: CSS.Properties;
  regions: CSS.Properties;
  row: CSS.Properties;
  subTitle: CSS.Properties;
  label: CSS.Properties;
  input: CSS.Properties;
  textarea: CSS.Properties;
  codeButton: CSS.Properties;
  codeButtonDisable: CSS.Properties;
  notice: CSS.Properties;
  noticeIcon: CSS.Properties;
  noticeArrow: CSS.Properties;
}

export interface AddressModalParameters {
  /**
   * 地址弹窗皮肤
   */
  AddressModalTheme: AddressModalThemeType;
  /**
   * Message皮肤
   */
  MessageTheme: MessageStyle;
  /**
   * 电话号码,参与人电话号码
   */
  playerPhone: string;
  /**
   * 外框ID 弹窗所属父级ID
   */
  outerFrameId: string;
  /**
   * 默认收货人信息
   */
  receiverInfo: {
    /**
     * 身份证号
     */
    idCard: string,
    /**
     * 收货人姓名
     */
    receiverName: string,
    /**
     * 收货人电话
     */
    receiverPhone: string,
    /**
     * 收货省市区id['15', '1513', '151315'],
     */
    region: string[],
    /**
     * 收货省市区 ['广东省','广州市','天河区']
     */
    regionName: string[],
    /**
     * 详细地址
     */
    address: string,
  };
  /**
   * 要求身份证
   */
  cardIdRequest: cardIdRequestEnum;
  /**
   * 验证码,检查短信验证码，验证参与人
   */
  checkVerificationCode: () => Promise<any>;
}

export enum cardIdRequestEnum {
  hideCardId = 1,
  checkCardId = 2,
  checkInputCardId = 3,
  neveCheck = 4
}

