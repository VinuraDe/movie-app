<?php
header("Access-Control-Allow-Origin: https://movie-app-ebeyonds.netlify.app");
header("Content-Type: application/json");

$storagePath = __DIR__ . '/savedShows.json';

if (!file_exists($storagePath)) {
    echo json_encode([]);
    exit;
}

$data = file_get_contents($storagePath);
echo $data;
