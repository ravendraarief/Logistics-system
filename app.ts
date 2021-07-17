import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Berhasil')
})

app.listen(3000, ()=> {
    console.log('Server sudah berjalan')
})