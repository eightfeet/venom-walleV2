import Modal from "@eightfeet/modal";
import { Option } from '@eightfeet/picker';
import Msg from "./../Msg";
import AddressPicker from "./../AddressSelecter";
import { AddressModalParameters, cardIdRequestEnum, receiverInfoType } from "./Address";
export interface submitParames {
    /** 收货人 */
    receiver: string;
    /** 收货人手机 */
    phone: string;
    /** 省市区 */
    regions: string;
    /** 省市区名称 */
    regionsName: string;
    /** 详细地址 */
    address: string;
    /** 身份证号码 */
    idcode?: string;
    /** 手机验证码 */
    verificationvode?: string | number;
}
/**
 *
 * 地址弹窗
 * @class AddressModal
 * @extends {Modal}
 */
declare class AddressModal extends Modal {
    Msg: Msg;
    playerPhone: string;
    receiverInfo: receiverInfoType;
    cardIdRequest: cardIdRequestEnum;
    AddressPicker: AddressPicker;
    formStyle: any;
    showNotebox: boolean;
    checkVerificationCode: any;
    regionsTheme: any;
    addressTrigger: string;
    readyFillBack: boolean;
    AddressPickerConfig: Option;
    id: string;
    /**
     * Creates an instance of AddressModal.
     * @param {*} config
     * @memberof AddressModal
     */
    constructor({ AddressModalTheme: { contentTop, contentBottom, submit, header, article, footer, close, regions, row, subTitle, label, input, textarea, codeButton, codeButtonDisable, notice, noticeIcon, noticeArrow, ...other }, MessageTheme, playerPhone, outerFrameId, receiverInfo, cardIdRequest, AddressPickerConfig, checkVerificationCode, ...more }: AddressModalParameters);
    /**
     *
     * @param { Object } params
     * params = {playerPhone, receiverName, receiverPhone, cardIdRequest, region, regionName, address, idCard}
     * @memberof AddressModal
     */
    updateParams: (params: receiverInfoType & {
        playerPhone: string;
        cardIdRequest: cardIdRequestEnum;
    }) => void;
    /**
     *
     * 显示地址模块弹窗
     * @param {Function} submit 提交方法
     * @param {Function} cancel 取消方法
     * @param {Function} success 保存成功回调
     * @returns
     * @memberof AddressModal
     */
    showModal: (submit: (parames: submitParames) => void, cancel?: () => void, success?: (data: any, parames: submitParames) => void) => Promise<void>;
    /**
     *
     * 以非移除方式隐藏弹窗
     * @returns
     * @memberof AddressModal
     */
    hideModal: () => Promise<void>;
    /**
     *
     * 操作弹窗Dom
     * @param {Function} submit
     * @param {Function} cancel
     * @memberof AddressModal
     */
    handleDom: (submit: (parames: submitParames) => void, cancel?: () => void, success?: (data: any, parames: submitParames) => void) => void;
    /**
     *
     * 数据回填
     * @memberof AddressModal
     */
    dataFillback: () => void;
    /**
     * 提交与提交回调
     * 填写收货地址时是否验证身份证:
     * this.cardIdRequest = 1 隐藏身份证，2 验证身份证，3 身份证为空时不验证有填写时验证，4 不验证身份证
     * @param {*} submit
     * @returns
     * @memberof AddressModal
     */
    handleSubmit: (submit: (parames: submitParames) => void, success: (data: any, parames: submitParames) => void) => void;
}
export default AddressModal;
