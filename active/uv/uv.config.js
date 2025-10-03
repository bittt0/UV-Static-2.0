self.__uv$config = {
    prefix: '/service/',
    bare: 'https://ult-66t6.onrender.com', // 👈 your backend URL
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv.handler.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
