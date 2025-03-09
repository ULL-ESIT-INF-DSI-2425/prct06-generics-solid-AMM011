import { IBird } from "./IBird";
/**
 * Interface IFlyingBird
 * @description Interface that extends IBird and adds the fly method.
 */
export interface IFlyingBird extends IBird {
    fly(): void;
}