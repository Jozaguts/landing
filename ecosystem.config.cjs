module.exports = {
    apps: [
        {
            name: 'hola.futzo.io',
            port: '3001',
            exec_mode: 'fork',
            script: '.output/server/index.mjs',
            env: {
                NODE_ENV: 'production',
            },
        }
    ]
}