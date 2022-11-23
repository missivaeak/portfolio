<?php
if (session_status() == PHP_SESSION_NONE) {
    $name = preg_replace("/[^a-z\d]/i", "", __DIR__);
    session_name($name);
    session_start();
}

$action = $_GET["action"] ?? null;

if (isset($action)) {
    if ($action == "theme") {
        if ($_SESSION["theme"] == "dark") {
            unset($_SESSION["theme"]);
        } else {
            $_SESSION["theme"] = "dark";
        }
    } elseif ($action == "session_destroy") {
        session_destroy();
    }

    $url = $_SERVER["REQUEST_SCHEME"] . "://" . $_SERVER["HTTP_HOST"] . $_SERVER["PHP_SELF"];
    $url = preg_replace("/index.php\//", "", $url);
    header("Location: $url");
    exit();
}