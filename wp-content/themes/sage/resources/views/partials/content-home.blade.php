<div id="hero-blog" class="text-center d-flex justify-content-center align-items-center">
    <header>
        <h1 class="text-white fw-bold">BLOG</h1>
    </header>
</div>

@php $i=0 @endphp
<div class="container">
    <div class="row">
        <div class="col">
            <section class="row container">

                @while(have_posts()) @php the_post() @endphp
                    @if ( $i === 0)
                        @include('partials.content-blog-main-item')
                    @else
                        @include('partials.content-blog-item')
                    @endif
                    
                    @php $i++ @endphp
                @endwhile

            </section>
        </div>
    </div>
</div>

