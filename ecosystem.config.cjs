module.exports = {
    apps: [
        {
            name: 'Dashboard',
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