const connection = require('../database/connection');
const crypto = require('crypto');  

module.exports = {

    async index (request, response){
        const ongs = await connection('ongs').select('*'); 
    
        return response.json(ongs); 
    },

    async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body; 
    
    // O Id vai ser um caractere de 4 bytes convertindo para uma string em hexadecimal
    const id = crypto.randomBytes(4).toString('HEX'); 

    // nome da tabela para enserir dados
    await connection('ongs').insert({
        id, 
        name, 
        email, 
        whatsapp, 
        city, 
        uf,
    })

    return response.json({ id });
    },
}