const request = require('supertest')
const app = require('../index')
const sequelize = require('../database/sequelize')


describe('Endpoints', ()=>{
    beforeAll(async () => {
        await sequelize.sync()
    })

    afterAll(async ()=>{
        await sequelize.close()
    });

    it('should return a list of customers', async ()=>{
        const res = await request(app).get('/api/customers')
        expect(res.statusCode).toEqual(200)
    })

    it('should create a new customer', async ()=>{
        const res = await request(app)
            .post('/api/customers')
            .send({
                nombre: "fulano",
                apellido: "talx12",
                sexo: "M",
                fecha_de_nacimiento: "1997-02-17",
                direccion: "Aregua",
                telefono: "1321321",
                email: "tal@tal.com"
            })
            expect(res.statusCode).toEqual(201)
    })

    it('should return a customer', async()=>{
        const res = await request(app).get('/api/customers/1')
        expect(res.statusCode).toEqual(200)
    })

    it('should update a customer', async ()=>{
        const res = await request(app)
            .put('/api/customers')
            .send({
                id: 1,
                nombre: "fulano2",
                apellido: "talx1222",
                sexo: "M",
                fecha_de_nacimiento: "1997-02-17",
                direccion: "Aregua",
                telefono: "1321321",
                email: "tal@tal.com"
            })
        expect(res.statusCode).toEqual(200)
    })

    it('delete a  customer', async ()=>{
        const res = await request(app)
            .delete('/api/customers/1')
        expect(res.statusCode).toEqual(204)
    })
})
