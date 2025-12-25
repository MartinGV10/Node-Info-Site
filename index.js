const http = require('http')
const fs = require('fs')
const path = require('path')
const { URL } = require('url')

const port = 8080

const server = http.createServer((req, res) => {
    let filePath
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html')
    }

    else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html')
    }

    else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'contact.html')
    }

    else {
        filePath = path.join(__dirname, '404.html')
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.log(err)
        }
        else {
            res.writeHead(200, {'COntent-type': 'text/html'})
            res.end(content)
        }
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})