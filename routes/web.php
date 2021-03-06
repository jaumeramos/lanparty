<?php

use App\Http\Controllers\GroupAvatarController;
use App\Http\Controllers\InvitationsController;
use App\Http\Controllers\ManageParticipantsController;
use App\Http\Controllers\ParticipantMessagesController;
use App\Http\Controllers\ParticipantsHomePageController;
use App\Http\Controllers\PartnersController as Partners;
use App\Http\Controllers\Web\PartnersController;
use App\Http\Controllers\Web\PrizesController;
use App\Http\Controllers\SorteigController;
use App\Http\Controllers\Web\CsrfTokenController;
use App\Http\Controllers\Web\EventsController;
use App\Http\Controllers\Web\ManagersController;

use App\Http\Controllers\PrizesController as Premis;
use App\Http\Controllers\Web\UsersController;
use App\Http\Controllers\WelcomeController;

use App\Http\Controllers\CaptureTheFlagController;

Route::get('/condicions', function () {
    // TODO
    return redirect('http://www.google.com');
});

Route::get('/', '\\' . WelcomeController::class . '@index');

Route::get('/premis', '\\' . Premis::class . '@index');
Route::get('/colaboradors', '\\' . Partners::class . '@show');

Route::get('/ctf', '\\' . CaptureTheFlagController::class . '@show');
Route::get('/ctfGroup/{id}', '\\' . CaptureTheFlagController::class . '@group');
Route::post('/ctfSubmit', '\\' . CaptureTheFlagController::class . '@submit');

Auth::routes();

// CSRF TOKEN
Route::get('/csrftoken','\\'. CsrfTokenController::class . '@show');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', '\\' . ParticipantsHomePageController::class . '@index');
    Route::get('/manage/participants', '\\' . ManageParticipantsController::class. '@index')
        ->name('manage.participants');

    Route::get('/manage/events', '\\' . EventsController::class . '@index');

    Route::get('/manage/prizes/','\\'. PrizesController::class.'@index');

    Route::post('/manage/events/{event}/messages', '\\' .ParticipantMessagesController::class . '@store')
        ->name('manage.event-messages.store');

    Route::get('/manage/invitations/{code}', '\\' . InvitationsController::class . '@show')
        ->name('manage.invitations.show');

    Route::get('/group/{group}/avatar', '\\' . GroupAvatarController::class . '@show');

    Route::post('/group/{group}/avatar','\\' . GroupAvatarController::class . '@store');

    // Sorteig
    Route::get('/manage/sorteig', '\\' . SorteigController::class . '@index')
        ->name('manage.sorteig');

    Route::get('/manage/managers', '\\' . ManagersController::class . '@index');
    Route::get('/manage/partners', '\\' . PartnersController::class . '@index');


    Route::get('/manage/users', '\\' . UsersController::class . '@index');

});
