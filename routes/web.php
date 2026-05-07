<?php

use App\Models\QrScan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::get('qr', function (Request $request) {
    QrScan::create([
        'user_agent' => $request->userAgent(),
    ]);

    return redirect()->route('home');
})->name('qr.scan');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard', [
            'qrScanCount' => QrScan::count(),
        ]);
    })->name('dashboard');
});

require __DIR__.'/settings.php';
