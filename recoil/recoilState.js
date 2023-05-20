import {atom} from "recoil" 

export const contractState = atom({
    "key":"contractState",
    "default": ""
})

export const accountIdState = atom({
    "key":"accountIdState",
    "default": ""
})

export const signedInState = atom({
    "key":"signedInState",
    "default": ""
})

export const walletState = atom({
    "key":"walletState",
    "default": ""
})

export const mainState = atom({
    "key":"mainState",
    "default": "home"
})