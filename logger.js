import log4js from "log4js";

log4js.configure({
    appenders:{
        logsConsola:{type:'console'},
        logsFileError:{type:'file',filename:'error.log'},
        logsFileWarn:{type:'file',filename:'warn.log'}
    },
    categories:{
        info:{appenders:['logsConsola'],level:'info'},
        error:{appenders:['logsFileError','logsConsola'],level:'error'},
        warn:{appenders:['logsFileWarn','logsConsola'],level:'warn'}
    }
})