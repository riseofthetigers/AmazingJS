
{% assign recs = (site.data.recs )  %}var k1 = [{% for rec in recs | limit:900 offset: 100%}{% if forloop.index0 > 0 %},{% endif %}[{{rec.id}},{{rec.p}},{% if rec.d %}{{rec.d}}{% else %}null{% endif %},{% if rec.dd %}{{rec.dd}}{% else %}null{% endif %},{% if rec.dr %}{{rec.dr}}{% else %}null{% endif %},{% if rec.w %}{{rec.w}}{% else %}null{% endif %},{% if rec.wd %}{{rec.wd}}{% else %}null{% endif %},{% if rec.wr %}{{rec.wr}}{% else %}null{% endif %},{% if rec.m %}{{rec.m}}{% else %}null{% endif %},{% if rec.md %}{{rec.md}}{% else %}null{% endif %},{% if rec.mr %}{{rec.mr}}{% else %}null{% endif %},"{{rec.name}}",{% if rec.url %}"{{rec.url}}"{% else %}null{% endif %},{% if rec.desc %}"{{rec.desc}}"{% else %}null{% endif %}]{% endfor %}]