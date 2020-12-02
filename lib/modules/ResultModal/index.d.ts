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
    };
    constructor({ style: { prizeAlias, prizeName, awardMsg, prizeImg, memo, contentTop, contentBottom, submit, header, article, footer, ...other }, modalTitle, outerFrameId, onCancel, submitText, onEnsure, submitAddressText, }: ResultModalParameters);
    showModal: (prize: any) => Promise<unknown>;
    hideModal: () => Promise<unknown>;
}
export default ResultModal;
