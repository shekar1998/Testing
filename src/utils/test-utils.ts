import { connect } from "http2";

export const doneCallback = (cb:Function,done:Function)=>{

    return (...params:any[])=>{  //...params-->collecting all parameters
        try{
            cb(...params); //...params-->spreading the parameters
            done();
        }catch(err){
            done(err);
        }
    }
};