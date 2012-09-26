<?php

$title = 'BYU | Get a Net ID';
if(isset($_GET['p'])) {
  $p = $_GET['p'];
}
if($p == undefined || $p == "") {
  $p = 'netid';
}
$p = $p . '.html';


?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $title; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/boostrap.css">
        <link rel="stylesheet" href="css/style.css">
        
        <!-- Init script includes Modernizr.js and Lab.js. All other scripts loaded asynchronously with Lab.js. -->
        <script src="js/init.min.js"></script>
    </head>
    
    <?php 
      include($p);
    ?>
    
</html>