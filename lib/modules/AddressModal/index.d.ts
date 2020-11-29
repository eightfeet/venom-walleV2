import Modal from "@eightfeet/modal";
/**
 *
 * 地址弹窗
 * @class AddressModal
 * @extends {Modal}
 */
declare class AddressModal extends Modal {
    Msg: any;
    playerPhone: any;
    receiverInfo: any;
    cardIdRequest: any;
    AddressPicker: any;
    formStyle: {
        content: any;
        contentTop: any;
        contentBottom: any;
        submit: any;
        header: any;
        article: any;
        footer: any;
        close: any;
        row: any;
        subTitle: any;
        label: any;
        input: any;
        textarea: any;
        codeButton: any;
        codeButtonDisable: any;
        notice: any;
        noticeIcon: any;
        noticeArrow: any;
    };
    showNotebox: boolean;
    checkVerificationCode: any;
    regionsTheme: any;
    addressTrigger: string;
    readyFillBack: boolean;
    AddressPickerConfig: any;
    /**
     * Creates an instance of AddressModal.
     * @param {*} config
     * @memberof AddressModal
     */
    constructor({ AddressModalTheme: { content, contentTop, contentBottom, submit, header, article, footer, close, regions, row, subTitle, label, input, textarea, codeButton, codeButtonDisable, notice, noticeIcon, noticeArrow, ...other }, MessageTheme, playerPhone, outerFrameId, receiverInfo, cardIdRequest, checkVerificationCode, }: {
        AddressModalTheme: {
            [x: string]: any;
            content: any;
            contentTop: any;
            contentBottom: any;
            submit: any;
            header: any;
            article: any;
            footer: any;
            close: any;
            regions: any;
            row: any;
            subTitle: any;
            label: any;
            input: any;
            textarea: any;
            codeButton: any;
            codeButtonDisable: any;
            notice: any;
            noticeIcon: any;
            noticeArrow: any;
        };
        MessageTheme: any;
        playerPhone: any;
        outerFrameId: any;
        receiverInfo: any;
        cardIdRequest: any;
        checkVerificationCode: any;
    });
    /**
     *
     * @param { Object } params
     * params = {playerPhone, receiverName, receiverPhone, cardIdRequest, region, regionName, address, idCard}
     * @memberof AddressModal
     */
    updateParams: (params: any) => void;
    /**
     *
     * 显示地址模块弹窗
     * @param {Function} submit 提交方法
     * @param {Function} cancel 取消方法
     * @param {Function} success 保存成功回调
     * @returns
     * @memberof AddressModal
     */
    showModal: (submit: any, cancel: any, success: any) => Promise<void>;
    /**
     *
     * 以非移除方式隐藏弹窗
     * @returns
     * @memberof AddressModal
     */
    hideModal: () => Promise<unknown>;
    /**
     *
     * 操作弹窗Dom
     * @param {Function} submit
     * @param {Function} cancel
     * @memberof AddressModal
     */
    handleDom: (submit: any, cancel: any, success: any) => void;
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
    handleSubmit: (submit: any, success: any) => void;
}
export default AddressModal;
