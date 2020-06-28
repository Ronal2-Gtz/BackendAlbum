const messagueError = (res, status, error) =>{ 
    res.status(status).json({
        ok: false,
        err: error
    })
}
module.exports = {
    messagueError
}