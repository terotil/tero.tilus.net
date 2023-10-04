---
title: "Ubuntu Karmic Koala, ASUS Eee Box and black screen"
radiant_id: 43
radiant_slug: ubuntu-karmic-koala-asus-eee-box-and-black-screen
breadcrumb: "Ubuntu Karmic Koala, ASUS Eee Box and black screen"
created_at: 2009-11-20T05:15:46.000Z
updated_at: 2009-11-20T05:15:46.000Z
published_at: 2009-11-20T07:15:46.000Z
tags: ["hack-hack","problem solved"]
comments:
---
<p>I recently upgraded my lovely <span class="caps">ASUS</span> Eee Box <span class="caps">B203</span> from Jaunty to Karmic only to be greeted by black screen and blinking signal light (signal going on and off).  This appeared to be caused by <a href="https://bugs.freedesktop.org/show_bug.cgi?id=24255">a bug in Xorg Intel driver version 2.9.0</a>.  <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=548045">The Debian bug report</a> had a patch that worked for me.</p>
<p>It took a while to find out the reason.  Mainly because there are &#8220;Karmic black screen!!!1&#8243; stuff all over the place now and the reasons vary.  Xorg log had a tip.  Xorg Intel driver did not see the monitor which was connected to <span class="caps">DVI</span> port (<span class="caps">TDMS</span>-1).</p>
<pre><code>(II) intel(0): Output VGA disconnected
(II) intel(0): Output TMDS-1 disconnected
(WW) intel(0): No outputs definitely connected, trying again...
(II) intel(0): Output VGA disconnected
(II) intel(0): Output TMDS-1 disconnected
(WW) intel(0): Unable to find initial modes
(EE) intel(0): No valid modes.</code></pre>
<p>That way I found the <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=548045">Debian bug report</a>.  And this is how I downloaded, patched, compiled and installed a video driver that works for me.</p>
<pre><code>mkdir ~/src
cd ~/src
apt-get install dpkg-dev
apt-get source xserver-xorg-video-intel
wget http://bugs.debian.org/cgi-bin/bugreport.cgi?msg=30;filename=patch-revert;att=1;bug=548045 -O video-intel-revert.patch
patch xserver-xorg-video-intel-2.9.0/src/i830_sdvo.c video-intel-revert.patch
apt-get build-deb xserver-xorg-video-intel
apt-get install devscripts  # contains dch
cd xserver-xorg-video-intel-2.9.0/
dch -i "bump version"
dch -l '~terotil' "tag this local"
dpkg-buildpackage -rfakeroot -uc -b
cd ..
sudo dpkg -i xserver-xorg-video-intel_2.9.0-1ubuntu3~terotil1_i386.deb</code></pre>