import Modal from "@eightfeet/modal";
import { ResultModalParameters } from './ResultModal';
declare class ResultModal extends Modal {
    modalTitle: any;
    submitText: any;
    submitAddressText: any;
    onEnsure: any;
    theme: {
        modalTitle: any;
        prizeAlias: any;
        prizeName: any;
        awardMsg: any;
        prizeImg: any;
        memo: any;
        contentTop: any;
        contentBottom: any;
        submit: any;
        header: any;
        article: any;
        footer: any;
        contentWrap: any;
    };
    constructor({ style: { prizeAlias, prizeName, awardMsg, prizeImg, memo, contentTop, contentBottom, submit, header, article, footer, contentWrap, ...other }, modalTitle, outerFrameId, onCancel, submitText, onEnsure, submitAddressText, animation, ...more }: ResultModalParameters);
    showModal: (prize: any) => Promise<unknown>;
    hideModal: () => Promise<void>;
}
export default ResultModal;
