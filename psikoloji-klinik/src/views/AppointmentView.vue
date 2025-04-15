<template>
  <div class="appointment">
    <section class="page-header">
      <div class="container">
        <h1>Randevu Al</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="appointment-intro">
          <p>Terapi seansları için online randevu alabilirsiniz. Lütfen aşağıdaki formu doldurarak uygun gün ve saati seçiniz.</p>
        </div>
        
        <div class="appointment-grid">
          <div class="appointment-info">
            <div class="info-card">
              <h3>Randevu Bilgileri</h3>
              <ul class="appointment-details">
                <li>
                  <i class="fas fa-clock"></i>
                  <div>
                    <h4>Seans Süresi</h4>
                    <p>Standart seanslar 50 dakika sürmektedir. İlk görüşme 60 dakikadır.</p>
                  </div>
                </li>
                
                <li>
                  <i class="fas fa-calendar-alt"></i>
                  <div>
                    <h4>Çalışma Saatleri</h4>
                    <p>Pazartesi - Cuma: 09:00 - 18:00<br>Cumartesi: 10:00 - 14:00</p>
                  </div>
                </li>
                
                <li>
                  <i class="fas fa-wallet"></i>
                  <div>
                    <h4>Ödeme</h4>
                    <p>Ödeme, seans öncesinde nakit, kredi kartı veya banka havalesi ile yapılabilir. Bazı özel sağlık sigortaları tarafından karşılanabilmektedir.</p>
                  </div>
                </li>
                
                <li>
                  <i class="fas fa-ban"></i>
                  <div>
                    <h4>İptal Politikası</h4>
                    <p>Randevunuzu en az 24 saat öncesinden iptal etmeniz gerekmektedir. Aksi takdirde seans ücreti tahsil edilir.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="online-session-info">
              <h3>Online Seanslar</h3>
              <p>Yüz yüze görüşme imkanı olmayan danışanlar için güvenli bir platform üzerinden online terapi hizmeti sunulmaktadır. Online seanslar için de randevu almanız gerekmektedir.</p>
              <div class="online-benefits">
                <div class="benefit">
                  <i class="fas fa-home"></i>
                  <p>Evinizin konforunda terapi</p>
                </div>
                <div class="benefit">
                  <i class="fas fa-globe"></i>
                  <p>Coğrafi sınırlamaların ortadan kalkması</p>
                </div>
                <div class="benefit">
                  <i class="fas fa-hourglass-half"></i>
                  <p>Zamandan tasarruf</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="appointment-form-container">
            <h2>Randevu Formu</h2>
            <form class="appointment-form">
              <div class="form-group">
                <label for="name">Adınız Soyadınız*</label>
                <input type="text" id="name" name="name" required>
              </div>
              
              <div class="form-group">
                <label for="email">E-posta Adresiniz*</label>
                <input type="email" id="email" name="email" required>
              </div>
              
              <div class="form-group">
                <label for="phone">Telefon Numaranız*</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              
              <div class="form-group">
                <label for="session-type">Seans Tipi*</label>
                <select id="session-type" name="session-type" required>
                  <option value="" disabled selected>Seçiniz...</option>
                  <option value="first-visit">İlk Görüşme</option>
                  <option value="individual">Bireysel Terapi</option>
                  <option value="couple">Çift Terapisi</option>
                  <option value="child">Çocuk ve Ergen Terapisi</option>
                  <option value="online">Online Terapi</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="session-mode">Görüşme Şekli*</label>
                <select id="session-mode" name="session-mode" required>
                  <option value="" disabled selected>Seçiniz...</option>
                  <option value="face-to-face">Yüz Yüze</option>
                  <option value="online">Online</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="preferred-date">Tercih Ettiğiniz Tarih*</label>
                <input type="date" id="preferred-date" name="preferred-date" required>
              </div>
              
              <div class="form-group">
                <label for="preferred-time">Tercih Ettiğiniz Saat*</label>
                <select id="preferred-time" name="preferred-time" required>
                  <option value="" disabled selected>Seçiniz...</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="alternative-date">Alternatif Tarih</label>
                <input type="date" id="alternative-date" name="alternative-date">
              </div>
              
              <div class="form-group">
                <label for="alternative-time">Alternatif Saat</label>
                <select id="alternative-time" name="alternative-time">
                  <option value="" disabled selected>Seçiniz...</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Eklemek İstedikleriniz</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              
              <div class="form-group form-check">
                <input type="checkbox" id="terms" name="terms" required>
                <label for="terms">Kişisel verilerimin işlenmesine izin veriyorum.*</label>
              </div>
              
              <p class="form-note">* ile işaretlenen alanlar zorunludur.</p>
              
              <button type="submit" class="btn">Randevu Talep Et</button>
            </form>
          </div>
        </div>
        
        <div class="info-box">
          <i class="fas fa-info-circle"></i>
          <p>Randevu talebiniz gönderildikten sonra, size en kısa sürede e-posta veya telefon yoluyla dönüş yapılacaktır. Randevunuz onaylandığında bir hatırlatma e-postası alacaksınız.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppointmentView'
}
</script>

<style scoped>
.page-header {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.appointment-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  font-size: 18px;
}

.appointment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
}

.info-card {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.info-card h3 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.appointment-details {
  list-style: none;
}

.appointment-details li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.appointment-details i {
  font-size: 20px;
  color: var(--primary-color);
  margin-right: 15px;
  margin-top: 3px;
}

.appointment-details h4 {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
}

.online-session-info {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
}

.online-session-info h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
}

.online-session-info p {
  margin-bottom: 20px;
}

.online-benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.benefit {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
  border-radius: 5px;
  width: calc(50% - 10px);
}

.benefit i {
  color: var(--primary-color);
  margin-right: 10px;
  font-size: 18px;
}

.appointment-form-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.appointment-form-container h2 {
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
  margin-top: 30px;
}

.form-check input {
  width: auto;
  margin-right: 10px;
}

.form-note {
  font-size: 14px;
  color: var(--dark-gray);
  margin-bottom: 20px;
  margin-top: 10px;
}

.info-box {
  display: flex;
  align-items: center;
  background-color: #f0f7ff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 40px;
}

.info-box i {
  font-size: 30px;
  color: var(--primary-color);
  margin-right: 20px;
}

@media screen and (max-width: 768px) {
  .appointment-grid {
    grid-template-columns: 1fr;
  }
  
  .benefit {
    width: 100%;
  }
}
</style> 