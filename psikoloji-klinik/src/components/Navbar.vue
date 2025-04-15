<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <div class="logo">
        <a href="/">
          <span>Uzm. Psk. Selin Kanay</span>
        </a>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><a href="/">Ana Sayfa</a></li>
        <li><a href="/hakkimda">Hakkımda</a></li>
        <li><a href="/hizmetler">Hizmetlerim</a></li>
        <li><a href="/uzmanlik">Uzmanlık Alanlarım</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/iletisim">İletişim</a></li>
        <li><a href="/randevu" class="btn nav-btn">Randevu Al</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 80px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo a {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
}

.nav-links li {
  margin-left: 25px;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-btn {
  margin-left: 15px;
}

.menu-icon {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--primary-color);
}

@media screen and (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    transition: transform 0.4s ease;
    z-index: 999;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-links li {
    margin: 15px 0;
  }

  .nav-btn {
    margin: 15px 0 0 0;
  }
}
</style> 