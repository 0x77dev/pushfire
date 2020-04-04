const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.sendByFCM = functions.https.onRequest(async (req, res) => {
    const payload = {
      notification: {
        title: req.query.title,
        body: req.query.body ? req.query.body : ""
      }
    };

    const token = req.query.token;

    try {
        res.json(await admin.messaging().sendToDevice(token, payload));
    } catch (error) {
        res.status(400).json({ error });
    }
});