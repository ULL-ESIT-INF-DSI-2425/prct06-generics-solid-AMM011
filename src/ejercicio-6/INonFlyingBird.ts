import { IBird } from './IBird';   
/**
 * Interface INonFlyingBird
 * @description Interface that extends IBird and adds the swim method.
 */
export interface INonFlyingBird extends IBird {
    swim(): void;
}