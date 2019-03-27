<?php

namespace Tests\Feature\web;

use Tests\Feature\Traits\CanLogin;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Class EventsControllerTest.
 *
 * @package Tests\Feature
 */
class EventsControllerTest extends TestCase
{
    use RefreshDatabase, CanLogin;

    /** @test */
    public function manager_can_see_events_module()
    {
        $this->withoutExceptionHandling();
        $this->loginAsManager('web');
        $response = $this->json('GET','/manage/events');
        $response->assertSuccessful();
        $response->assertViewIs('manage.events.index');
        $response->assertViewHas('events');
    }
}