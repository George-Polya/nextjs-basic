export default function handler(req, res) {

    if(req.method === "GET"){

        const today = new Date();
        res.status(200).json(today)
    }
}