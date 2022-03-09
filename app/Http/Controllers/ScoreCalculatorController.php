<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ScoreCalculatorController extends Controller
{
  public function index()
  {
    return Inertia::render('ScoreCalculator');
  }
}
