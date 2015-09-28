<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<!-- Page Title -->
	<title>You</title>
	<script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>
</head>
<body>
	<div style="width: 100%; text-align:center; margin-top:400px;">
	ip=<b><?php $ip=$_SERVER['REMOTE_ADDR']; echo($ip); ?></b>; geo=<script language="Javascript">
	document.write(geoplugin_city()+", "+geoplugin_countryName());
  </script>;
</div>
</body>
</html>
