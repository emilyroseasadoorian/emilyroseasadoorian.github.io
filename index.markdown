---
title: "Poem Index"
---

{% for poem in site.poems %}
{% include blurb.md %}
{% endfor %}

<hr />

All word counts provided by [WordCounter](https://wordcounter.net).

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/styles/index.css" />
<script src="{{ site.baseurl }}/scripts/index.js" type="text/javascript"></script>
