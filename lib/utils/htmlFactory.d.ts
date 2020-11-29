export declare const isPC: boolean;
/**
 * 设置dom的font-size，用于控制子元素的em基准单位，pc端时 font-size = 16px，
 * 如果有emBase传入直接使用emBase为基准字体大小
 * 其他按规则计算字体值（屏幕宽度:UI宽度 = 屏幕字体大小:UI字体大小）
 * @param {HTMLElement} dom
 * @param {String} parentId
 * @param {Number} emBase
 * @returns
 */
export declare function setEmBase(dom: HTMLElement, parentId: string, emBase: number): void;
/**
 * dom Hooks 挂载模板到document的指定目标节点，当目标节点不存在时创建一个并设置基准fontSize
 *
 * @export
 * @param {HTMLElement} dom (Required) html模板
 * @param {String} target (Required) element id
 * @param {String} parentId 父级 id
 * @returns
 */
export declare function createDom(dom: string, target: string, parentId: string, emBase: number): Promise<HTMLElement>;
/**
 * 移除指定id的dom及其子节点
 *
 * @export
 * @param {string} target
 */
export declare function removeDom(target: string): Promise<unknown>;
/**
 *
 * html模板编与样式绑定，使用html模板时需要用到
 * @export
 * @param {*} dom
 * @param {*} classes
 * @returns
 */
export declare function combineDomByClass(dom: any, classes: any): Promise<unknown>;
/**
 * 获取id
 * @param id dom id
 */
export declare function getIdDom(id: string): HTMLElement;
