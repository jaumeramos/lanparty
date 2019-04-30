@extends('layouts.app')

@section('content')
    <v-container fluid grid-list-md text-xs-center>
        <v-layout>
              <ctf-group :group-name="{{ json_encode($groupname) }}" :flags="{{  $flags }}" ></ctf-group>
        </v-layout>
    </v-container>
    <v-container fluid grid-list-md text-xs-center>
        <v-layout>
              <user-numbers></user-numbers>
        </v-layout>
    </v-container>
@endsection
