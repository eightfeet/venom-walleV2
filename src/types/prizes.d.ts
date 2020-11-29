export interface PrizesItem {
  /**奖品ID */
  prizeId: number;
  /**奖品类型 奖品类型 0 未中奖, 1 实物, 2 虚拟*/
  prizeType: number;
  /**收货类型 领取方式。1：默认；2：填写地址；3：链接类；4：虚拟卡*/
  receiveType: number;
  /**奖品别名 */
  prizeAlias: string;
  /**奖品名称 */
  prizeName: string;
  /**中奖提示信息 */
  awardMsg: string;
  /**奖品图片 */
  prizeImg: string;
  /**游戏图片 */
  gameImg: string;
  /**备注 */
  memo: string;
}
