<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h3>Uzm. Psk. Selin Kanay</h3>
          <p>Profesyonel psikolojik destek ve terapi hizmetleri ile ruh sağlığınıza katkıda bulunuyorum.</p>
          <div class="contact">
            <span><i class="fas fa-phone"></i> +90 212 555 6789</span>
            <span><i class="fas fa-envelope"></i>psikologselinkanay@gmail.com</span>
          </div>
          <div class="socials">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-section links">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/hakkimda">Hakkımda</a></li>
            <li><a href="/hizmetler">Hizmetlerim</a></li>
            <li><a href="/uzmanlik">Uzmanlık Alanlarım</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>
        <div class="footer-section contact-form">
          <h3>Bize Ulaşın</h3>
          <form action="#" method="post">
            <input type="email" name="email" class="contact-input" placeholder="E-posta adresiniz">
            <textarea name="message" class="contact-input" placeholder="Mesajınız..."></textarea>
            <button type="submit" class="btn">Gönder</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Uzm. Psk. Selin Kanay | Tüm Hakları Saklıdır</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 50px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h3 {
  color: var(--accent-color);
  margin-bottom: 20px;
  font-size: 20px;
}

.footer-section p {
  margin-bottom: 20px;
}

.contact span {
  display: block;
  margin-bottom: 10px;
}

.contact i {
  margin-right: 10px;
  color: var(--accent-color);
}

.socials {
  margin-top: 20px;
}

.socials a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
  color: #fff;
  transition: all 0.3s ease;
}

.socials a:hover {
  background-color: var(--accent-color);
  transform: scale(1.1);
}

.footer-section.links ul {
  list-style: none;
}

.footer-section.links li {
  margin-bottom: 10px;
}

.footer-section.links a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section.links a:hover {
  color: var(--accent-color);
  padding-left: 5px;
}

.contact-input {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
}

textarea.contact-input {
  height: 100px;
  resize: none;
}

.contact-input::placeholder {
  color: #bbb;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 30px;
  }
}
</style> 