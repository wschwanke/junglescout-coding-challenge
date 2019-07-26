@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.homepage-header')
    @include('partials.content-page')
  @endwhile
@endsection
