<?php
header("Content-Type: application/json");
echo json_encode(["status" => "Backend is live", "endpoints" => [
    "/get_saved_shows.php",
    "/contact_form.php"
]]);
