const path = require('path')
const fs = require('fs')

const messagueError = (res, status, error) => {
  res.status(status).json({
    ok: false,
    err: error,
  });
};

const eliminarImg = (nombreImg) =>{
  const pathImagen = path.resolve(__dirname,`img/${nombreImg}`)
  if(fs.existsSync(pathImagen)){
    fs.unlinkSync(pathImagen)
  }else{
    return messagueError(res, status, 'No se ha podido eliminar la imagen')
  }
}

module.exports = {
  messagueError,
  eliminarImg
};
