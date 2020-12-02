import Modal from "@eightfeet/modal";
import { NoticeModalStyle } from "./NoticeModal";
declare class NoticeModal extends Modal {
    theme: {
        contentTop: any;
        contentBottom: any;
        submit: any;
        modalTitle: any;
        header: any;
        article: any;
        footer: any;
    };
    constructor({ contentTop, contentBottom, submit, header, article, footer, modalTitle, ...other }: NoticeModalStyle, outerFrameId: string);
    showModal: ({ title, content, footer }: {
        title: any;
        content: any;
        footer: any;
    }, onCancel: any) => Promise<unknown>;
    hideModal: () => Promise<unknown>;
}
export default NoticeModal;
