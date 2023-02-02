<template>
  <main class="layout" role="main">
    <Header :siteName="$page.metadata.siteName" />
    <slot/>
    <div class="footer">
      <div>
        <p>
          Built with
          <a target="_blank" class="link" href="//gridsome.org">Gridsome</a>
          & Made with ❤️ by
          <a target="_blank" class="link" href="//alex.design">Alex Brown</a>
        </p>
      </div>
      <div class="footer-links">
        <a target="_blank" href="/sitemap.xml">Sitemap</a>
        <a target="_blank" href="/feed.xml">RSS Feed</a>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
}
</script>

