function envIsDefined (key: string): boolean {
    return typeof process.env[key] === 'string'
}

function envAnyDefined (...keys: string[]): boolean {
    return keys.some(envIsDefined)
}

export {
    envIsDefined,
    envAnyDefined
}
