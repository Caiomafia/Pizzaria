function getflags(flags){ 
    const index = process.argv.indexOf(flag) + 1 
    return process.agrv(index)
}

module.exports = getflags;