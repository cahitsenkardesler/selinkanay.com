<template>
  <div class="contact">
    <section class="page-header">
      <div class="container">
        <h1>İletişim</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="contact-intro">
          <p>Sorularınız veya randevu talepleriniz için benimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağım.</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Adres</h3>
              <p>Bağdat Caddesi No:123 Kat:4 Daire:8<br>Kadıköy/İstanbul</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-phone"></i>
              </div>
              <h3>Telefon</h3>
              <p>+90 212 555 6789</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>E-posta</h3>
              <p>drayseyilmaz@gmail.com</p>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cuma: 09:00 - 18:00<br>Cumartesi: 10:00 - 14:00</p>
            </div>
            
            <div class="social-media">
              <h3>Sosyal Medya</h3>
              <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <h2>Mesaj Gönderin</h2>
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Adınız Soyadınız</label>
                <input type="text" id="name" name="name" required>
              </div>
              
              <div class="form-group">
                <label for="email">E-posta Adresiniz</label>
                <input type="email" id="email" name="email" required>
              </div>
              
              <div class="form-group">
                <label for="phone">Telefon Numaranız</label>
                <input type="tel" id="phone" name="phone">
              </div>
              
              <div class="form-group">
                <label for="subject">Konu</label>
                <select id="subject" name="subject">
                  <option value="randevu">Randevu Talebi</option>
                  <option value="bilgi">Bilgi Alma</option>
                  <option value="öneri">Öneri/Geri Bildirim</option>
                  <option value="diğer">Diğer</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mesajınız</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <div class="form-group form-check">
                <input type="checkbox" id="consent" name="consent" required>
                <label for="consent">Kişisel verilerimin işlenmesine izin veriyorum.</label>
              </div>
              
              <button type="submit" class="btn">Gönder</button>
            </form>
          </div>
        </div>
        
        <div class="map-container">
          <h2>Konum</h2>
          <div class="map">
            <iframe src="https://www.google.com/maps/@41.0517501,28.9918685,17z?hl=tr&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.page-header {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.contact-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  font-size: 18px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
}

.info-card {
  margin-bottom: 30px;
}

.info-icon {
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.info-card h3 {
  margin-bottom: 10px;
  color: var(--primary-color);
}

.social-media {
  margin-top: 30px;
}

.social-media h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #f4f4f4;
  color: var(--primary-color);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: var(--primary-color);
  color: white;
}

.contact-form-container {
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
}

.contact-form-container h2 {
  color: var(--primary-color);
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-check {
  display: flex;
  align-items: center;
}

.form-check input {
  width: auto;
  margin-right: 10px;
}

.map-container {
  margin-top: 60px;
}

.map-container h2 {
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
}

.map {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style> 