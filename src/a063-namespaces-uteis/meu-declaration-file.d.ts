export {}

declare global {

    declare namespace _ {
        declare interface LoDashStatic {
            mul(array: number[]): number 
        }
    }

    var MINHAGLOBAL: string
}