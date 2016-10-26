module.exports.anaSayfa = function(req, res){
  res.render('mekanlar-liste', { title: 'Anasayfa' });
};
module.exports.mekanBilgisi = function(req, res){
  res.render('mekan-detay', { title: 'Mekan Bilgisi' });
};
module.exports.mekanBilgisi1 = function(req, res){
  res.render('mekan-detay1', { title: 'Mekan Bilgisi' });
};
module.exports.mekanBilgisi2 = function(req, res){
  res.render('mekan-detay2', { title: 'Mekan Bilgisi' });
};
module.exports.mekanBilgisi3 = function(req, res){
  res.render('mekan-detay3', { title: 'Mekan Bilgisi' });
};
module.exports.mekanBilgisi4 = function(req, res){
  res.render('mekan-detay4', { title: 'Mekan Bilgisi' });
};
module.exports.yorumEkle = function(req, res){
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
};
