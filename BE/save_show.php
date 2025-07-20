<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$storagePath = __DIR__ . '/savedShows.json';

if (!file_exists($storagePath)) {
    file_put_contents($storagePath, json_encode([]));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = json_decode(file_get_contents($storagePath), true) ?? [];
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input || !isset($input['name'], $input['summary'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid input - name and summary required']);
        exit;
    }

    $existing = json_decode(file_get_contents($storagePath), true) ?? [];

    foreach ($existing as $show) {
        if ($show['name'] === $input['name']) {
            echo json_encode(['message' => 'Show already exists', 'duplicate' => true]);
            exit;
        }
    }

    $existing[] = [
        'name' => $input['name'],
        'summary' => $input['summary'],
        'image' => $input['image'] ?? ''
    ];

    if (file_put_contents($storagePath, json_encode($existing, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true, 'saved' => $input]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save show']);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['name'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing show name']);
        exit;
    }

    $shows = json_decode(file_get_contents($storagePath), true) ?? [];

    $filtered = array_values(array_filter($shows, function ($show) use ($input) {
        return $show['name'] !== $input['name'];
    }));

    if (file_put_contents($storagePath, json_encode($filtered, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true, 'removed' => $input['name']]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to remove show']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method Not Allowed']);
