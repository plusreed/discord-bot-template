function envIsDefined (key: string): boolean {
    return typeof process.env[key] === 'string'
}

function envAnyDefined (...keys: string[]): boolean {
    let ok = true

    for (const key of keys) {
        if (typeof process.env[key] === 'undefined') {
            ok = false
        }
    }

    return ok
}

export {
    envIsDefined,
    envAnyDefined
}
