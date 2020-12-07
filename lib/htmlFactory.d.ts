/**
 * 设置dom的font-size，用于控制子元素的em基准单位，pc端时 font-size = 16px，
 * 其他按规则计算字体值（屏幕宽度:UI宽度 = 屏幕字体大小:UI字体大小）
 * @param {HTMLElement} dom
 * @returns
 */
export declare function setEmBase(dom: HTMLElement, emBase: number): void;
/**
 * dom Hooks 挂载模板到document的指定目标节点，当目标节点不存在时创建一个并设置基准fontSize
 *
 * @export
 * @param {HTMLElement} dom (Required) html模板
 * @param {String} target (Required) element id
 * @param {Number} traget 基准大小
 * @returns
 */
export declare function createDom(dom: string, target: string, parentId: string, emBase: number): Promise<unknown>;
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
export declare function combineDomByClass(dom: any, classes: {
    [x: string]: any;
}): Promise<unknown>;
