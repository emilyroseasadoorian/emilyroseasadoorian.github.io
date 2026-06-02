---
layout: skeleton
---
<div id="mainContainer" class="px-3">
{% include navbar.md %}
    <h1 class="border-bottom border-primary border-opacity-25 mb-3 py-2">{{ page.title }}</h1>
    <main class="border-bottom border-primary border-opacity-25">
{{ content }}
    </main>
    <footer class="w-100 py-2">
        <i class="bi-{{ site.data.copyicons | sample }} me-2"></i>E. Rose Asadoorian | 2023 - 2026
    </footer>
</div>
