<article @php post_class() @endphp>

  <div class="entry-content container">
    <div class="row">
      <div class="col">
        <section class="py-5">
          <header>
            <h1 class="text-center entry-title text-aqua mb-4">{!! get_the_title() !!}</h1>
            <!-- @include('partials/entry-meta') -->
          </header>
            <article class="text-white">@php the_content() @endphp</article>
        </section>
      </div>
    </div>
    
  </div>
  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>

</article>
