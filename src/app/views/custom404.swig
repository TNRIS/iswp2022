{% extends 'layout/layout.swig' %}

{% block title %}
  <title>Not Found | 2022 Texas State Water Plan</title>
{% endblock title %}

{% block content %}
<section class="content">
  <div class="container">
    <div class="row panel-row">
      <div class="twelve columns">
        <h2>We’re sorry, the page you requested cannot be found.</h2>
        <p>This data summary is currently not available. To get data related to this topic, please email <a href="mailto:wrpdatarequests@twdb.texas.gov">wrpdatarequests@twdb.texas.gov</a>.</p>
      </div>
    </div>
  </div>
</section>
{% endblock content %}

{% block bodyscripts %}
  {# empty block to avoid sending GA pageview #}
{% endblock bodyscripts %}
