---
title: "Suomen Handelsbankenin kuluttajaverkkopankki ja kolmannet osapuolet"
radiant_id: 57
radiant_slug: suomen-handelsbankenin-kuluttajaverkkopankki-ja-kolmannet-osapuolet
breadcrumb: "Suomen Handelsbankenin kuluttajaverkkopankki ja kolmannet osapuolet"
created_at: 2015-02-25T09:33:23.000Z
updated_at: 2015-02-25T09:33:24.000Z
published_at: 2015-02-25T11:33:24.000Z
tags: []
comments:
---
<p>Vastikään <a href="http://fin.afterdawn.com/uutiset/artikkeli.cfm/2015/02/24/s-pankki-kertoo-googlelle-verkkopankkikaynnistasi-kiistaa-tietoturvaongelman">kiinnitettiin</a> <a href="http://www.uusisuomi.fi/teknologia/78244-s-pankki-tarkkailee-verkkopankkikayntiasi-googlen-avulla">huomiota</a> tapaan, jolla S-pankki käyttää Google Analytics -palvelua.  Kakkaa meni tosin pahasti tuulettimeen vasta kun <a href="https://twitter.com/S_Pankki/status/569878961209143296">S-pankki julkisesti kielsi tehdyt kiistattomat havainnot</a>.  Ajattelin kurkistaa miten oma asiointipankkini, Handelsbanken, suoriutuu tässä suhteessa.</p>
<p>Tämä pikainen katsaus koskee siis vain Handelsbankenin suomessa kuluttaja-asiakkailleen tarjoamaa verkkopankkipalvelua.  Kirjauduin verkkopankkiin käyttäen Chromium 39.0.2171.71 -selainta (joten foliohattu päässä oletan Googlen alla kirjoittamastani huolimatta tietävän verkkopankin käytöstäni kaikenlaista) ja tutkin kunkin näkymän latautumisen ja käytön aikana eri palvelimille lähetetyt pyynnöt käyttäen selaimen sisäänrakennettuja kehittäjän työkaluja.  Latasin näkymän, odotin reilut viisi minuuttia nähdäkseni lähetetäänkö pyyntöjä viivästettynä ja kävin sitten läpi pyyntölokin.</p>
<p>Kirjautumisnäkymä lataa resursseja verkkonimillä <code>www1.handelsbanken.fi</code> ja <code>secure.handelsbanken.com</code>.  Kaikki muut testaamani näkymät (Etusivu, Tilit ja kortit, tilitiedot, kortin tiedot, Maksut, uusi maksu, Säästä ja sijoita, Lainat, lainan tiedot, Postilaatikko, viestiketju) verkkonimillä <code>www1.handelsbanken.fi</code>, <code>www4.handelsbanken.fi</code> ja <code>hoiva.kauppalehti.fi</code> (Säästä ja sijoita -näkymän lataama kaaviokuva <span class="caps">OMX</span> Helsinki -indeksin kurssikehityksestä).</p>
<p>Verkkonimialueiden tiedot</p>
<blockquote>
<p>Domain Name: handelsbanken.com<br />
Registry Domain ID: 4496941_DOMAIN_<span class="caps">COM</span>-<span class="caps">VRSN</span><br />
Registrar <span class="caps">WHOIS</span> Server: whois.corporatedomains.com<br />
Registrar <span class="caps">URL</span>: www.cscprotectsbrands.com<br />
Updated Date: 2014-05-04T05:21:33Z<br />
Creation Date: 1996-05-07T04:00:00Z<br />
Registrar Registration Expiration Date: 2015-05-08T04:00:00Z<br />
Registrar: <span class="caps">CSC</span> <span class="caps">CORPORATE</span> <span class="caps">DOMAINS</span>, <span class="caps">INC</span>.<br />
Sponsoring Registrar <span class="caps">IANA</span> ID: 299<br />
Registrar Abuse Contact Email: admin@internationaladmin.com<br />
Registrar Abuse Contact Phone: +1.8887802723<br />
Domain Status: clientTransferProhibited http://www.icann.org/epp#clientTransferProhibited<br />
Registry Registrant ID: <br />
Registrant Name: Domain Admin<br />
Registrant Organization: Svenska Handelsbanken AB (publ)<br />
Registrant Street: <span class="caps">CAE</span><br />
Registrant City: Stockholm<br />
Registrant State/Province: <br />
Registrant Postal Code: 10670<br />
Registrant Country: SE<br />
Registrant Phone: +46.34952817550<br />
Registrant Phone Ext: <br />
Registrant Fax: +46.34952817567<br />
Registrant Fax Ext: <br />
Registrant Email: hostmaster@<span class="caps">HANDELSBANKEN</span>.SE<br />
</p>
</blockquote>
<blockquote>
<p>domain:   handelsbanken.fi<br />
descr:    Svenska Handelsbanken<br />
descr:    08615974<br />
address:  <span class="caps">ATK</span> osasto / Juha Hyytiäinen<br />
address:  Aleksanterinkatu 11<br />
address:  00100<br />
address:  Helsinki<br />
phone:    010 444 11<br />
status:   Granted<br />
created:  1.1.1991<br />
modified: 29.8.2012<br />
expires:  31.8.2017<br />
</p>
</blockquote>
<blockquote>
<p>domain:   kauppalehti.fi<br />
descr:    Alma Media Oyj<br />
descr:    14495809<br />
address:  Alma Media Hostmaster<br />
address:  PL 140<br />
address:  00101<br />
address:  Helsinki<br />
phone:    +358 10 665 000<br />
status:   Granted<br />
created:  7.7.2009<br />
modified: 20.6.2012<br />
expires:  7.7.2017<br />
</p>
</blockquote>
<p>Kolmansiksi osapuoliksi laskettavilta tahoilta ladataan siis kuva, <a href="https://hoiva.kauppalehti.fi/handelsbanken/index.gif?height=120&amp;width=500">https://hoiva.kauppalehti.fi/handelsbanken/index.gif?height=120&amp;width=500</a></p>
<p>Evästeitä asetetaan verkkoaluenimillä <code>www4.handelsbanken.fi</code>, <code>.www4.handelsbanken.fi</code>, <code>www1.handelsbanken.fi</code> ja <code>.handelsbanken.fi</code>.</p>
<p>Vastaan tuli yksi suorituksenaikainen virheilmoitus</p>
<blockquote>
<p>Uncaught SecurityError: Failed to read the &#8216;contentDocument&#8217; property from &#8216;HTMLIFrameElement&#8217;: Blocked a frame with origin &#8220;https://www4.handelsbanken.fi&#8221; from accessing a frame with origin &#8220;https://www1.handelsbanken.fi&#8221;. Protocols, domains, and ports must match.</p>
</blockquote>
<p>Virheilmoitus johtuu noin karkeasti ottaen siitä, että verkkopankin resursseja ladataan kahdesta eri lähteestä (<code>www1</code> ja <code>www4</code>) ja yhdestä lähteestä peräisin oleva ohjelma yrittää päästä käsiksi toisesta lähteestä ladattuihin asioihin, mikä rikkoisi yhtä selainten tietoturvan perusperiaatteista: saman alkuperän periaatetta (<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy">Same-origin policy</a>).</p>
<p>Alma Media saa siis asiakkaiden IP-osoitteet ja yleistä profilointitietoa asiakkaiden käyttämistä selaimista ja käyttöjärjestelmistä, mikäli asiakkaat avaavat verkkopankkia käyttäessään sijoitusnäkymän.  Silloin lähtee seuraavan kaltainen pyyntö</p>
<blockquote>
<p><span class="caps">GET</span> /handelsbanken/index.gif?height=120&amp;width=500 <span class="caps">HTTP</span>/1.1<br />
Host: hoiva.kauppalehti.fi<br />
Connection: keep-alive<br />
Accept: image/webp,* / *;q=0.8<br />
User-Agent: Mozilla/5.0 (<span class="caps">X11</span>; Linux x86_64) AppleWebKit/537.36 (<span class="caps">KHTML</span>, like Gecko) Chrome/39.0.2171.71 Safari/537.36<br />
Referer: https://www1.handelsbanken.fi/Havepa/<br />
Accept-Encoding: gzip, deflate, sdch<br />
Accept-Language: fi,en-US;q=0.8,en;q=0.6<br />
</p>
</blockquote>
<p>Kolmansilta osapuolilta ei ladata eikä suoriteta ohjelmia.</p>