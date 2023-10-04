---
title: "Debian (tai Ubuntu) ja salasanaton tunnus"
radiant_id: 42
radiant_slug: debian-tai-ubuntu-ja-salasanaton-tunnus
breadcrumb: "Debian (tai Ubuntu) ja salasanaton tunnus"
created_at: 2009-11-19T05:32:58.000Z
updated_at: 2009-11-19T05:32:58.000Z
published_at: 2009-11-19T07:32:58.000Z
tags: ["hack-hack","säätö"]
comments:
---
<p>Tarvitsin olohuonekoneeseen yhteiskäyttöisen salasanattoman käyttäjätunnuksen. Halusin kenen tahansa voivan päästä koneelta käsiksi nettiin, televisioon, musiikkiarkistoon ja valokuviin tarvitsematta syöttää mitään salasanaa, edes tyhjää.  Muttei toki netin yli, vaan vain olohuoneesta käsin.</p>
<p>Olin kranttu, enkä kelpuuttanut <span class="caps">GDM</span>:n tarjoamaa automaattikirjautumista.  Sain tarvitsemani, mutten ihan pelkästään salasanan nollaamalla.</p>
<p>Loin tavalliseen tapaan käyttäjätunnuksen <code>vieras</code> ja tuunasin käyttöoikeudet.  Käyttäjää luodessa asetetulla salasanalla ei luonnollisesti ole isommin väliä jos sen aikoo poistaa.  Salasanan saa poistettua komentamalla</p>
<pre><code>$ sudo passwd -d vieras</code></pre>
<p>Ja salasana tosiaan poistuu kokonaan, eikä sitä vain aseteta tyhjäksi.  Käyttäjän <code>/etc/shadow</code> rivi alkaa @vieras::@&hellip;.  Normaalisti, myös tyhjän salasanan tapauksessa, kahden ensimmäisen kaksoispisteen välissä on satakunta merkkiä pitkä salasanan hajautus.</p>
<p>Tämä ei pelkästään riitä, koska kirjautumisesta huolehtiva <span class="caps">PAM</span> on oletuksena säädetty olemaan kelpuuttamatta salasanattomia tunnuksia kirjautumaan.  <a href="http://lists.debian.org/debian-user/2005/11/msg00228.html">Salasanattomien tunnusten hyväksymiseen löytyi ohje debian-user -meililistalta.</a>  Autentikointiasetuksia tuunataan tiedostosta <code>/etc/pam.d/common-auth</code> vaihtamalla <code>nullok_secure</code> tilalle <code>nullok</code>.</p>
<p>Jos ssh-palvelin on asennettuna, pitää lisäksi pitää tarkista, että <code>/etc/ssh/sshd_config</code> tiedostossa on <code>PermitEmptyPasswords no</code>, ja jos ei ole, lisätä se ja käynnistä sshd uudelleen.  Näin varmistetaan, ettei ssh-yhteydellä pääse koneeseen ilman salasanaa.</p>