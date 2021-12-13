// ./server/routes/guitars.js

// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const storeController	= require("./../controllers/storeController")

// 2. RUTEO (ROUTER)

// CREAR TIENDA
router.post("/create", storeController.create)

// LEER TIENDA
router.get("/readall", storeController.readAll)

//LEER UNA TIENDA
router.get('/readone/:id', storeController.readOne)


// 3. EXPORTACIONES
module.exports = router