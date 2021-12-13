// ./server/controllers/guitarController.js
const Store = require("./../models/Store")

exports.create = async (req, res) => {

	// DEL FORMULARIO, CREAMOS VARIABLES Y ASIGNAMOS VALORES.
		const { 
			domicilio,
			telefono
		 } = req.body

	// CREAR UNA GUITARRA EN BASE DE DATOS
	try {
		const newStore = await Store.create({
			domicilio,
			telefono
		})

		// DEVOLVER UNA RESPUESTA EN UN FORMATO JSON
		res.json({
			msg: "Tienda creada con éxito",
			data: newStore	
		})

	} catch (error) {
		
		res.status(500).json({
			msg: "Hubo un error creando la tienda",
			error: error
		})

	}


}

exports.readAll = async (req, res) => {

	try {
		
		const stores = await Store.find({})

		res.json({
			msg: "Tiendas obtenidas con éxito.",
			data: stores
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error obteniendo los datos",
			error: error
		})

	}

}

exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const store = await Store.findById(id)

		res.json({
			msg: "Tienda obtenida con éxito.",
			data: store
		})

	} catch (error) {
		res.status(500).json({
			msg: "hubo un error obteniendo los datos.",
			error: error
		})
	}


}