import Modal from "@eightfeet/modal";
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
    constructor({ contentTop, contentBottom, submit, header, article, footer, modalTitle, ...other }: {
        [x: string]: any;
        contentTop: any;
        contentBottom: any;
        submit: any;
        header: any;
        article: any;
        footer: any;
        modalTitle: any;
    }, outerFrameId: any);
    showModal: ({ title, content, footer }: {
        title: any;
        content: any;
        footer: any;
    }, onCancel: any) => Promise<unknown>;
    hideModal: () => Promise<unknown>;
}
export default NoticeModal;
