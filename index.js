const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/transform", (req, res) => {
    const sentence = req.body.sentence;
    const words = sentence.split(" ");

    res.json({
        word_count: words.length,
        unique_words: [...new Set(words.map(eachWords => eachWords.toLowerCase()))],
        reversed_sentence: words.reverse().join(" ")
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));