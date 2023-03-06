<?php

// Set headers to allow cross-origin resource sharing (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "interview";

try {
    // Create a new mysqli instance
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // Fetch data from the Announced Polling Unit vote count data table
    $sql = "SELECT * FROM announced_pu_results LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $announced_pu_results_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($announced_pu_results_data, $row);
        }
    }

    // Fetch data from the Announced lga vote count table
    $sql = "SELECT * FROM announced_lga_results LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $announced_lga_results_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($announced_lga_results_data, $row);
        }
    }

    // Fetch data from the agentname table
    $sql = "SELECT * FROM agentname LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $agent_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($agent_data, $row);
        }
    }

    // Fetch data from the ward table
    $sql = "SELECT * FROM ward LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $ward_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($ward_data, $row);
        }
    }

    // Fetch data from the polling_unit table
    $sql = "SELECT * FROM polling_unit LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $polling_unit_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($polling_unit_data, $row);
        }
    }

    // Fetch data from the states table
    $sql = "SELECT * FROM states LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $states_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($states_data, $row);
        }
    }

    // Fetch data from the lga table
    $sql = "SELECT * FROM lga LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $lga_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($lga_data, $row);
        }
    }

    // Fetch data from the party table
    $sql = "SELECT * FROM party LIMIT 500";
    $result = $conn->query($sql);

    // Create an array to store the results
    $party_data = array();

    // Loop through the results and add them to the array
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($party_data, $row);
        }
    }

    // Create an associative array to store all the data
    $data = array(
        "ward" => $ward_data,
        "polling_unit" => $polling_unit_data,
        "states" => $states_data,
        "lga" => $lga_data,
        "party" => $party_data,
        "agents" => $agent_data,
        "announced_lga_results" => $announced_lga_results_data,
        "announced_pu_results" => $announced_pu_results_data,
    );

    // Convert the array to JSON and output it
    echo json_encode($data);

    } catch (Exception $e) {
        // Display user-friendly error message
        echo "Sorry, something went wrong. Please try again later.";
        // Log the error to a file or database for troubleshooting
        error_log("Error: " . $e->getMessage());
    }

// Close the database connection
$conn->close();
?>