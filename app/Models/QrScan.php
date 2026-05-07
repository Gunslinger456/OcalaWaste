<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QrScan extends Model
{
    /**
     * @var list<string>
     */
    protected $fillable = [
        'user_agent',
    ];
}
