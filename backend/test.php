<?php
// test.php

// Include your DAO classes. Adjust the paths if necessary.
require_once 'rest/dao/UserDao.php';
require_once 'rest/dao/MessagesDao.php';
require_once 'rest/dao/PlansDao.php';
require_once 'rest/dao/ReservationsDao.php';
require_once 'rest/dao/ServicesDao.php';

// Create DAO instances for each entity.
$membersDao      = new UserDao();
$messagesDao     = new MessagesDao();
$plansDao        = new PlansDao();
$reservationsDao = new ReservationsDao();
$servicesDao     = new ServicesDao();

// ---------- TEST MEMBERS DAO ----------

// Insert a new member.
$memberData = [
    'customer_name'     => 'Dzebni Smith',
    'customer_email'    => 'alice@example.com',
    'customer_password' => password_hash('secret', PASSWORD_DEFAULT),
    // Add any other fields that your table requires.
];
$insertMember = $membersDao->insert($memberData);
echo "Insert Member: " . ($insertMember ? "Success" : "Failed") . "\n";

// Retrieve all members.
$allMembers = $membersDao->getAll();
echo "All Members:\n";
print_r($allMembers);

// Update a member (assuming the new member got id=1).
$updateData = [
    'customer_name' => 'Alice S.',
    // Any other fields to update.
];
$updateMember = $membersDao->update(1, $updateData);
echo "Update Member: " . ($updateMember ? "Success" : "Failed") . "\n";

// Delete a member (if desired, comment out if you want to keep test data).
$deleteMember = $membersDao->delete(1);
echo "Delete Member: " . ($deleteMember ? "Success" : "Failed") . "\n";

// ---------- TEST MESSAGES DAO ----------

$messageData = [   // Use a valid id from your Members table.
    'message_content'   => 'Hello MESSAGE',
    'submitted_at' => date('Y-m-d H:i:s'),
    'customer_id'  => 2, // Use a valid customer_id.
];
$insertMessage = $messagesDao->insert($messageData);
echo "Insert Message: " . ($insertMessage ? "Success" : "Failed") . "\n";

// ---------- TEST PLANS DAO ----------

$planData = [
    'plan_title'  => 'Basic Plan',
    'plan_price' => 19.99,
    'plan_description' => 'Basic plan with limited features.',
    // etc.
];
$insertPlan = $plansDao->insert($planData);
echo "Insert Plan: " . ($insertPlan ? "Success" : "Failed") . "\n";

// ---------- TEST RESERVATIONS DAO ----------
$reservationData = [
    'customer_id' => 2, // Use a valid customer_id.
    'plan_id'     => 1, // Use a valid service_id.
    'order_date' => date('Y-m-d H:i:s'),
];
$insertReservation = $reservationsDao->insert($reservationData);
echo "Insert Reservation: " . ($insertReservation ? "Success" : "Failed") . "\n";

// ---------- TEST SERVICES DAO ----------
$serviceData = [
    'service_title' => 'Premium Service',
    'service_desc' => 'Premium service with all features.',
];
$insertService = $servicesDao->insert($serviceData);
echo "Insert Service: " . ($insertService ? "Success" : "Failed") . "\n";

// Fetch and print all entities to see the changes.
echo "\nMembers:\n";
print_r($membersDao->getAll());

echo "\nMessages:\n";
print_r($messagesDao->getAll());

echo "\nPlans:\n";
print_r($plansDao->getAll());

echo "\nReservations:\n";
print_r($reservationsDao->getAll());

echo "\nServices:\n";
print_r($servicesDao->getAll());
?>