jquery.swipeBar
===============

A simple jquery plugin to turn a DOM element into a swipe bar.

Use :

$("#myBar").swipeBar({ad:4,td:10});

to activate the 5th of 10 elements (ad: active dot; td : total dots; dots are numbered from 0 to td-1).

Example of use :

<!DOCTYPE html>
<html>
<head>
	<title>Swipe Bar example</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport"	content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
  <style type="text/css">
    .dot_bar {
      width:100%;
      text-align:center;
      padding:5px;
    }
    .dot {
        display: inline-block;
        width:12px;height:12px;
        border-radius:6px;
        background-color:#8999A6;
        margin-right:5px;
    }
    .dot_a {
        background-color: black;
    }
  </style>
  <script src="jquery.min.js" type="text/javascript"></script>
  <script src="jquery.swipebar.min.js" type="text/javascript"></script>
  <script type="text/javascript">
  $(document).ready(function() {
    $("#myBar").swipeBar({ad:4,td:10});
  });
  </script>
</head>
<body>
<div id="myBar" class="dot_bar"></div>
</div>
</body>
</html>
