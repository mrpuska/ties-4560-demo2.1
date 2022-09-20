const soap = require('soap')

class ConverterService {

    constructor() {
        this.init();
    }

    async init(){
        var url = 'https://ties4560-demo2-soap-service.onrender.com/Services/ConverterService?wsdl';
        try {
            this.client = await soap.createClientAsync(url, {});
        } catch (err){
            console.log(err)
        }
    }

    async decodeBase64(value){
        let args = {arg0: value}
        try {
            let result =  await this.client.DecodeBase64Async(args)
            return result[0].return;
        } catch (err){
            console.log(err)
        }
    }

    async encodeBase64(value) {
        let args = {arg0: value}
        try {
            let result =  await this.client.EncodeBase64Async(args)
            return result[0].return;
        } catch (err){
            console.log(err)
        }
    }

}

module.exports = ConverterService;