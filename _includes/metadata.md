<!-- Dynamic page title including general site title -->
{% if page.title %}{% assign title = page.title | append: " | " %}{% else %}{% assign title = "" %}{% endif %}
<title>{{ title }}{{ site.title }}</title>

<!-- General Site Metadata -->
<link rel="icon" type="image/jpg" href="{{ site.baseurl }}/images/rose_square.jpg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="{{ site.description }}" />
<meta name="theme-color" content="#FA003F" />
<meta charset="utf-8">

<!-- Sharing/Embedding Attributes -->
<meta property="og:description" content="{{ site.description }}" />
<meta property="og:url" content="{{ page.url }}" />
<meta property="og:title" content="{{ title }}{{ site.title }}" />
<meta property="og:image" content="{{ site.url }}{{ site.baseurl }}/images/rose_square.jpg" />
<meta name="twitter:image" content="{{ site.url }}{{ site.baseurl }}/images/rose_square.jpg" />
<meta name="twitter:card" content="summary" />

<!-- Local CSS & JavaScript -->
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/styles/root.css" />
<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/styles/index.css" />
<script src="{{ site.baseurl }}/scripts/index.js" type="text/javascript"></script>

<!-- CSS libraries: jQuery, Bootstrap, Bootstrap Icons -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css" />

<!-- JavaScript libraries: jQuery, Bootstrap -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>