<template>
  <div class="about">
    <section class="page-header">
      <div class="container">
        <h1>Hakkımda</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="/images/1692800977020.jpeg" alt="Uzm. Psk. Selin Kanay">
          </div>
          <div class="about-text">
            <h2>Merhaba, ben Uzm. Psk. Selin Kanay</h2>
            <p>2 yıllık klinik psikoloji deneyimimle, İstanbul'da bireysel danışmanlık hizmeti veriyorum.</p>
            
            <h3>Eğitim</h3>
            <ul>
              <li>Kadir Has Üniversitesi Psikoloji Bölümü (Lisans)</li>
              <li>Beykoz Üniversitesi Klinik Psikoloji (Yüksek Lisans)</li>
            </ul>
            
            <h3>Mesleki Deneyim</h3>
            <p>Kariyerim boyunca çeşitli yaş gruplarından danışanlarla çalıştım ve özellikle kaygı bozuklukları, depresyon ve travma sonrası stres bozukluğu alanlarında uzmanlaştım.</p>
     
            
            <h3>Yaklaşımım</h3>
            <p>Terapilerinde bilişsel davranışçı terapi, şema terapi ve kabul ve kararlılık terapisi gibi kanıta dayalı yaklaşımları kullanıyorum. Her danışanın benzersiz olduğuna inanıyor ve terapi sürecini kişinin ihtiyaçlarına göre özelleştiriyorum.</p>
            <p>Sıcak, empatik ve yargılayıcı olmayan bir terapi ortamı sağlamak benim için çok önemlidir. Danışanlarımla güvene dayalı bir ilişki kurmaya ve onlara sorunlarıyla başa çıkmaları için gerekli becerileri öğretmeye odaklanıyorum.</p>
            
            <h3>Sürekli Gelişim</h3>
            <p>Psikoloji alanındaki en son araştırma ve teknikleri takip etmek için düzenli olarak eğitim ve konferanslara katılıyorum. Ayrıca mesleki gelişimimi sürdürmek için süpervizyon almaya ve meslektaşlarımla vaka tartışmaları yapmaya devam ediyorum.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.page-header {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.about-content {
  padding: 60px 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-text h3 {
  margin-top: 30px;
  color: var(--primary-color);
}

.about-text ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

.about-text li {
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .about-image img {
    max-width: 300px;
  }
}
</style> 