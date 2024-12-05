const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql2/promise')

let app = new Koa()
let router = new Router()

router.get('/', async ctx=>{
	ctx.body = 'ind3x page'
})

router.get('/db', async ctx=>{
	let connection = await mysql.createConnection({
		host: 'mysql',
		port: 3306,
		user: 'root',
		password: '123456'
	})
	let [res, fields] = await connection.query('SHOW DATABASES;')
	ctx.body = res
})

app.use(router.routes())
app.listen(3000)


