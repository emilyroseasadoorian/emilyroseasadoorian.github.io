<nav id="navbar" class="bg-body w-100 sticky-top py-2 border-bottom border-primary">
    <a href="/" title="Home" class="me-1"><i class="bi-house-heart"></i></a>
    {% if page.url == "/" %}<a href="javascript:void(0)" id="searchIcon" title="Search Details" class="me-1"><i class="bi-search"></i></a>
    <input type="text" id="searchBar" class="bg-body border-primary border rounded" />{% endif %}
    <a href="javascript:void(0)" title="Scroll to Bottom"><i class="bi-arrow-down" id="scrollToBottom"></i></a>
    <a href="javascript:void(0)" title="Scroll to Top"><i class="bi-arrow-up" id="scrollToTop"></i></a>
</nav>