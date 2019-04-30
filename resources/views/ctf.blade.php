
@extends('layouts.app')

@section('content')
    <v-container ctf fluid>
          <ctf :groups="{{  json_encode($groups) }}" ></ctf>
          <ctf-submit :mostrar="{{json_encode($registratCTF)}}"></ctf-submit>
    </v-container>
    <v-container fluid grid-list-md text-xs-center>
        <v-layout>
              <user-numbers></user-numbers>
        </v-layout>
    </v-container>
@endsection
