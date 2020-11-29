export declare function fixpx(px: number): string | 0;
/** 使休眠 */
export declare function dormancyFor(time: number): Promise<unknown>;
/** 倒计时 */
export declare function countDown(times: number, callback: (count: number) => void): void;
/** 对象判断 */
export declare function isObject(value: any): boolean;
