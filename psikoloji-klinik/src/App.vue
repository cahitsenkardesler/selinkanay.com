<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  line-height: 1.6;
}

main {
  min-height: calc(100vh - 160px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  background: #6a75ca;
  color: #fff;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #555fb3;
}

h1, h2, h3 {
  margin-bottom: 15px;
  font-weight: 600;
  line-height: 1.3;
}
</style> 