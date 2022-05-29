module.exports = {
    publicPath: (process.env.NODE_ENV === "production" && process.env.IS_NGINX !== "true") ? "/etch_a_sketch/" : "/"
}