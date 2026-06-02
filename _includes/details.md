Author: {% if poem.author %}{{ poem.author }}{% else %}Unknown/Traditional{% endif %}
{% if poem.translator %}
|
Translator: {{ poem.translator }}{% endif %}
{% if poem.published %}
|
Published: {{ poem.published }}{% endif %}
|
{{ poem.wordcount }} words
|
<a href="{{ poem.source }}">Source</a>