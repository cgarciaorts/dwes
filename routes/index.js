var express = require('express');
var router = express.Router();

const usuarios = require('../models/usuarios')
const moviles = require('../models/moviles')
const login = require('../models/login')


router.get('/', async (req,res) => {
  const obtenerusuarios = await usuarios.find({});
  res.render('usuarios', {obtenerusuarios});
});


router.get('/CrearUsuario' , (req, res) => {
  res.render('crearusuario')
})

router.post('/crearusuario', async (req, res, next) => {
  const enviarusuario = new usuarios(req.body); 
  await enviarusuario.save();
  res.redirect('/crearusuario',)
});

router.get('/editarusuario/:id', async (req, res, next) => {
  const usuarioeditado = await usuarios.findById(req.params.id)
  res.render('editarusuario', {usuarioeditado})
})
router.put('/usuarioEditado/:id', async (req, res, next) => {
  await usuarios.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/')
})

router.delete('/eliminarusuario/:id', async (req, res) => {
  await usuarios.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

/* MOVILES */

router.get('/moviles', async (req,res) => {
  const obtenermoviles = await moviles.find({});
  res.render('moviles', {obtenermoviles});
});

router.get('/CrearMovil',(req,res)=>{
  res.render('crearmoviles')
})

router.post('/crearmoviles', async (req, res, next) => {
  const enviarmoviles = new moviles(req.body); 
  await enviarmoviles.save();
  res.redirect('CrearMovil')
});

router.get('/editarmovil/:id', async (req, res, next) => {
  const movileditado = await moviles.findById(req.params.id)
  res.render('editarmoviles', {movileditado})
})

router.put('/movilEditado/:id', async (req, res, next) => {
  await moviles.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/moviles')
})

router.delete('/eliminarmovil/:id',async(req,res) => {
  await moviles.findByIdAndDelete(req.params.id)
  res.redirect('/moviles')
})

//login

router.get('/login', async (req,res) => {
  res.render('login');
});


router.post('/login', async (req, res, next) => {
  const validarlogin = new login(req.body); 
  await validarlogin.save();
  res.redirect('login')
});


router.get('/sinpermiso', async (req,res) => {
  res.render('sinpermiso');
});

router.get('/bienvenido', async (req,res) => {
  res.render('bienvenido');
});


module.exports = router;