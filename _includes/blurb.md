<div class="blurb mt-3 px-2 pt-1 border border-primary border-opacity-25 rounded-3 shadow">
    <div class="headline mb-3">
        <h2 class="d-inline me-1"><a href="poems/{{ poem.slug }}" class="poemTitle poemSearch">{{ poem.title }}</a></h2>
    </div>
    <div class="poemDetails poemSearch">
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
    </div>
</div>