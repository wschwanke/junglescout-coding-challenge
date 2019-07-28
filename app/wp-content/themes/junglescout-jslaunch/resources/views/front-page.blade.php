@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.homepage-header')
    <div class="container">
      @include('partials.content-page')
    </div>
  @endwhile
@endsection
