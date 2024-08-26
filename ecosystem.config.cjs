module.exports = {
    apps: [
        {
            name: 'landing',
            port: '3001',
            exec_mode: 'cluster',
            instances: 'max',
            script: './server/index.mjs',
            env: {
                NODE_ENV: 'production',
            },
        }
    ]
}