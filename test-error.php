<?php
// force all errors on
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// trigger a notice and a fatal
echo $noSuchVar;          
bogus_function();         

?>