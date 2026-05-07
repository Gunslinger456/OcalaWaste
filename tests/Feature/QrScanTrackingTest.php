<?php

use App\Models\QrScan;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('qr route records a scan and redirects to the home page', function () {
    $response = $this->withHeader('User-Agent', 'QR Test Browser')->get(route('qr.scan'));

    $response->assertRedirect(route('home'));

    $this->assertDatabaseHas('qr_scans', [
        'user_agent' => 'QR Test Browser',
    ]);
});

test('dashboard shows the total qr scan count', function () {
    QrScan::create();
    QrScan::create();
    QrScan::create();

    $this->actingAs(User::factory()->create());

    $response = $this->get(route('dashboard'));

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->where('qrScanCount', 3));
});
