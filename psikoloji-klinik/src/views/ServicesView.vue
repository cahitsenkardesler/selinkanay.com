<template>
  <div class="services">
    <section class="page-header">
      <div class="container">
        <h1>Hizmetlerim</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="services-intro">
          <p>Ruh sağlığınız için geniş bir yelpazede profesyonel psikolojik destek hizmetleri sunuyorum. Her bir hizmet, bilimsel temellere dayalı ve kişiye özel olarak tasarlanmıştır.</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>Bireysel Terapi</h3>
            <p>Depresyon, kaygı bozuklukları, travma ve kişisel gelişim alanlarında bire bir terapötik destek sağlıyorum. Seanslar 50 dakika sürmektedir ve genellikle haftada bir kez yapılmaktadır.</p>
            <p>Kullandığım temel yaklaşımlar:</p>
            <ul>
              <li>Bilişsel Davranışçı Terapi (BDT)</li>
              <li>Şema Terapi</li>
              <li>Kabul ve Kararlılık Terapisi (ACT)</li>
              <li>Mindfulness temelli yaklaşımlar</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Çift Terapisi</h3>
            <p>İlişki sorunları, iletişim problemleri, güven kayıpları ve evlilik çatışmaları gibi konularda çiftlere destek sağlıyorum. Çift terapisi seansları genellikle 80 dakika sürmektedir.</p>
            <p>Çift terapisinde:</p>
            <ul>
              <li>İletişim becerilerinin geliştirilmesi</li>
              <li>Çatışma çözme stratejileri</li>
              <li>Duygusal bağın güçlendirilmesi</li>
              <li>Güven yeniden inşası</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-child"></i>
            </div>
            <h3>Çocuk ve Ergen Terapisi</h3>
            <p>7-18 yaş arası çocuk ve ergenlere yönelik psikolojik destek hizmetleri sunuyorum. Davranış problemleri, kaygı, depresyon, okul sorunları ve travma gibi konularda yardımcı oluyorum.</p>
            <p>Çocuk ve ergen terapisinde:</p>
            <ul>
              <li>Oyun terapisi teknikleri</li>
              <li>Yaşa uygun BDT uygulamaları</li>
              <li>Ebeveyn danışmanlığı</li>
              <li>Okul ile işbirliği</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-book-reader"></i>
            </div>
            <h3>Online Terapi</h3>
            <p>Fiziksel olarak kliniğe gelemeyenler için güvenli bir platform üzerinden online terapi hizmeti sunuyorum. Online terapide de yüz yüze terapide olduğu gibi aynı etik kurallar ve gizlilik ilkeleri geçerlidir.</p>
            <p>Online terapinin avantajları:</p>
            <ul>
              <li>Coğrafi sınırlamaların ortadan kalkması</li>
              <li>Zamandan tasarruf</li>
              <li>Kendi güvenli alanınızda terapi alma imkanı</li>
              <li>Daha esnek randevu saatleri</li>
            </ul>
          </div>
        </div>
        
        <div class="pricing-info">
          <h2>Ücretlendirme</h2>
          <p>Terapi ücretleri, hizmet türüne ve süresine göre değişmektedir. Güncel ücret bilgisi için lütfen iletişime geçiniz.</p>
          <p>Belirli özel sağlık sigortaları tarafından kısmi veya tam olarak karşılanabilmektedir. Sigorta kapsamı hakkında detaylı bilgi için sigorta şirketinizle görüşmenizi öneririm.</p>
          <a href="/iletisim" class="btn">İletişime Geç</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView'
}
</script>

<style scoped>
.page-header {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.services-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  font-size: 18px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  font-size: 40px;
  color: var(--primary-color);
  margin-bottom: 20px;
  text-align: center;
}

.service-card h3 {
  margin-bottom: 15px;
  color: var(--primary-color);
  text-align: center;
}

.service-card ul {
  margin-left: 20px;
  margin-top: 10px;
}

.service-card li {
  margin-bottom: 5px;
}

.pricing-info {
  background-color: var(--light-gray);
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  margin-top: 60px;
}

.pricing-info h2 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.pricing-info .btn {
  margin-top: 20px;
}
</style> 