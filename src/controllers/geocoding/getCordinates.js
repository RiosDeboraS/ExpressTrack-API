const opencage = require('opencage-api-client');
require('dotenv').config();


const getCoordinates = async (req, res) => {

    const address = req.body.address;

    try {
 
        const data = await opencage.geocode({ q: address, key: process.env.OPENCAGE_API_KEY });

        if (data.status.code === 200 && data.results.length > 0) {
            const coordinates = data.results[0].geometry;
            res.json(coordinates);
        } else {
            throw new Error('Address not found');
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error fetching the geocoding data' });
    }
};

module.exports = getCoordinates;