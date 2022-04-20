import { ModalStyle } from '@eightfeet/modal';
import * as CSS from 'csstype';

export interface NoticeModalStyle extends ModalStyle {
    /**内容包裹 */
    contentWrap?: CSS.Properties;
    /**内容顶部 */
    contentTop?: CSS.Properties;
    /**内容底部 */
    contentBottom?: CSS.Properties;
    /**提交按钮 */
    submit?: CSS.Properties;
    /**头部 */
    header?: CSS.Properties;
    /**内容 */
    article?: CSS.Properties;
    /**脚部 */
    footer?: CSS.Properties;
    /**标题 */
    modalTitle?: CSS.Properties;
}
