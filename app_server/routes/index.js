var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlMekanlar = require('../controllers/mekanlar');
var ctrlDigerleri = require('../controllers/digerleri');

router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan', ctrlMekanlar.mekanBilgisi);
router.get('/mekan1', ctrlMekanlar.mekanBilgisi1);
router.get('/mekan2', ctrlMekanlar.mekanBilgisi2);
router.get('/mekan3', ctrlMekanlar.mekanBilgisi3);
router.get('/mekan4', ctrlMekanlar.mekanBilgisi4);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);

//diger sayfalar
router.get('/hakkinda', ctrlDigerleri.hakkinda);

module.exports = router;
