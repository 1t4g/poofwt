const express = require('express');
const app = express();

app.get('/whitepaper', (req, res) => {
    const words = ['магические', 'инновации', 'космические', 'децентрализованные', 'реверсные', 'сингулярности', 'токеномика', 'алгоритмы', 'каштаны'];
    const randomText = Array.from({length: 50}, () => words[Math.floor(Math.random() * words.length)]).join(' ');
    res.send(randomText);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
