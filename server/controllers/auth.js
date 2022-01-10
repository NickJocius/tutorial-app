

exports.register = (req, res) => {
    const data = req.body;
    return res.json(data);
}