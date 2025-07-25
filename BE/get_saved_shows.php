<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json");

$storagePath = __DIR__ . '/savedShows.json';

if (!file_exists($storagePath)) {
    echo json_encode([]);
    exit;
}

$data = file_get_contents($storagePath);
echo $data;
