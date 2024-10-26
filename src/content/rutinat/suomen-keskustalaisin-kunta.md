---
title: "Suomen keskustalaisin kunta?"
radiant_id: 26
radiant_slug: suomen-keskustalaisin-kunta
breadcrumb: "Suomen keskustalaisin kunta?"
created_at: 2008-10-27T07:25:45.000Z
updated_at: 2009-08-16T14:49:52.000Z
published_at: 2008-10-27T09:25:45.000Z
tags: ["hack-hack","politiikka","vaalit","numeroiden pyörittelyä"]
comments:
---
<p>Menin ja kysyin, että onko Halsua edelleen Suomen keskustalaisin kunta (kuten muistan sen joskus olleen, voin tosin olla aivan hirvittävän väärässä).  No, pakkohan se oli selvittää.  Keskustalaisimman kunnan titteliä pitää näiden kuntavaalien jälkeen hallussaan Merijärvi, jossa äänistä 89,9 % meni Keskustalle, niukasti kakkoseksi jäi Pulkkila 89,4 %. Halsua jäi sijalle 24 lukemilla 63,3 %. </p>
<p>Keskustan kymmenen kärki on seuraava</p>
<table class="numeroita">
	<tr>
		<th>Kannatus (%)</th>
		<th>Kunta</th>
	</tr>
	<tr>
		<td>89,9</td>
		<td>Merijärvi</td>
	</tr>
	<tr>
		<td>89,4</td>
		<td>Pulkkila</td>
	</tr>
	<tr>
		<td>84,2</td>
		<td>Lehtimäki</td>
	</tr>
	<tr>
		<td>83,7</td>
		<td>Rantsila</td>
	</tr>
	<tr>
		<td>83,4</td>
		<td>Kuivaniemi</td>
	</tr>
	<tr>
		<td>83,0</td>
		<td>Kestilä</td>
	</tr>
	<tr>
		<td>78,2</td>
		<td>Ullava</td>
	</tr>
	<tr>
		<td>74,9</td>
		<td>Alavieska</td>
	</tr>
	<tr>
		<td>74,8</td>
		<td>Pyhäntä</td>
	</tr>
	<tr>
		<td>71,3</td>
		<td>Sievi</td>
	</tr>
</table>
<p>Ja tottahan se piti Vihreä top-10 hakea myös</p>
<table class="numeroita">
	<tr>
		<th>Kannatus (%)</th>
		<th>Kunta</th>
	</tr>
	<tr>
		<td>23,3</td>
		<td>Helsinki</td>
	</tr>
	<tr>
		<td>17,0</td>
		<td>Pirkkala</td>
	</tr>
	<tr>
		<td>16,5</td>
		<td>Oulu</td>
	</tr>
	<tr>
		<td>15,9</td>
		<td>Turku</td>
	</tr>
	<tr>
		<td>15,9</td>
		<td>Espoo</td>
	</tr>
	<tr>
		<td>15,7</td>
		<td>Tampere</td>
	</tr>
	<tr>
		<td>14,5</td>
		<td>Kuopio</td>
	</tr>
	<tr>
		<td>14,1</td>
		<td>Kerimäki</td>
	</tr>
	<tr>
		<td>14,1</td>
		<td>Kaarina</td>
	</tr>
	<tr>
		<td>13,8</td>
		<td>Vantaa</td>
	</tr>
</table>
<p>Jyväskylä oli 11,7 % kannatuslukemilla sijalla 18.</p>
<p>Samoista huvituksista kiinnostuneille käyttämäni (rumat, mutta toimivat) loitsut alla.</p>
<pre><code># Haetaan YLEn tulospalvelusta puolueiden kannatukset kunnittain
$ for ((i=1; i&lt;1000; i++)); do \
    wget "http://www.yle.fi/vaalit2008/tulospalvelu/kunnat/puolueiden_kannatus_kno$i.html"; \
    done
# Purskutetaan kannatuslukemat esiin
$ for f in *.html; do \
    cat $f | tr '\r\n\t' '   ' | \
    sed -r 's/.*&lt;title&gt;.* - .* - (.*)&lt;\/title&gt;(.*VIHR *&lt;\/td&gt; *&lt;td&gt;([^&lt;]*)&lt;)?.*/\3;\1:/' | \
    tr ';:' '\t\n'; done &gt; vihreiden-lukemat.txt
# Haetaan niistä mitä halutaan
$ cat vihreiden-lukemat.txt | sort -r -n | head -n 10
$ cat vihreiden-lukemat.txt | sort -r -n | grep -n Jyväskylä
</code></pre>